import {NodePath, PluginItem} from "@babel/core";
import {
    callExpression,
    CallExpression,
    identifier,
    Identifier,
    ImportDeclaration,
    jsxAttribute,
    jsxExpressionContainer,
    jsxIdentifier,
    objectExpression,
    ObjectExpression,
    objectProperty,
    Program,
    VariableDeclaration,
    variableDeclarator,
    stringLiteral
} from "@babel/types";

import template from "@babel/template";

const buildImport = template(`
  import { styled } from "../../styled-system/jsx";
  import { css } from '../../styled-system/css'
`);

export const transform: PluginItem = (t) => ({
    visitor: {
        Program(path: NodePath<Program>) {
            path.unshiftContainer("body", buildImport())
        },
        JSXAttribute(path: NodePath<any>) {
            if (path.node.name.name === "css") {
                const attr = jsxAttribute(
                    jsxIdentifier("className"),
                    jsxExpressionContainer(
                        callExpression(
                            identifier("css"),
                            [path.node.value.expression]
                        )
                    )
                )
                path.replaceWith(attr)
            }

        },
        ImportDeclaration(path: NodePath<ImportDeclaration>) {
            if (path.node.source.value === "@stitches/react") {
                path.remove()
            }
        },
        CallExpression(path: NodePath<CallExpression>) {
            if (path.node.callee.type === "Identifier" && path.node.callee.name == 'styled') {
                const [comp, style] = path.node.arguments as [Identifier, ObjectExpression]

                style.properties = style?.properties?.filter(it => it.type === "ObjectProperty" && (("name" in it.key && it.key.name !== "all") || "value" in it.key)) ?? []

                const props = objectExpression([
                    objectProperty(
                        identifier("base"),
                        style
                    )
                ])
                path.node.arguments = [comp, props]
            }
        },
        //remover keyframes
        VariableDeclaration(path: NodePath<VariableDeclaration>){
            const d = path.node.declarations[0]
            if(d.type === "VariableDeclarator" && d?.init?.type === "CallExpression" && d.init.callee.type === "Identifier" && d.init.callee.name === "keyframes"){
                if(d.id.type === "Identifier") {
                    path.node.declarations = [variableDeclarator(
                        d.id,
                        stringLiteral(d.id.name)
                    )]

                    console.log(`Remover keyframes: ${d.id.name}`)
                }
            }
        }
    },
});
