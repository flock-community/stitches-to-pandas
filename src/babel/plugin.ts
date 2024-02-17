import {NodePath, PluginItem, traverse} from "@babel/core";
import {
    callExpression,
    CallExpression,
    identifier,
    Identifier,
    ImportDeclaration,
    jsxAttribute,
    JSXAttribute,
    jsxExpressionContainer,
    jsxIdentifier,
    objectExpression,
    ObjectExpression,
    objectProperty,
    Program,
    SpreadElement,
    stringLiteral,
    VariableDeclaration,
    variableDeclarator,
    VariableDeclarator
} from "@babel/types";

import template from "@babel/template";

import colors from "../style/colors"

const buildImport = template(`
  import { styled } from "../../../styled-system/jsx";
  import { css } from '../../../styled-system/css'
`);


export const report: { colors: string[], keyframes: string[] } = {
    colors: [],
    keyframes: []
}

export const transform: PluginItem = (t) => ({
    visitor: {

        // Add `styled-system` imports
        Program(path: NodePath<Program>) {
            path.unshiftContainer("body", buildImport())
        },

        // Replace css attribute with className and css function
        JSXAttribute(path: NodePath<JSXAttribute>) {
            if (path.node.name.name === "css" && path.node?.value?.type == "JSXExpressionContainer" && path.node.value.expression.type === "ObjectExpression") {
                const attr = jsxAttribute(
                    jsxIdentifier("className"),
                    jsxExpressionContainer(
                        callExpression(
                            identifier("css"),
                            [modifyProps(path.node.value.expression)]
                        )
                    )
                )
                path.replaceWith(attr)
            }
        },

        // Remove imports
        ImportDeclaration(path: NodePath<ImportDeclaration>) {
            if (path.node?.source?.value === "@stitches/react") {
                path.remove()
            }
            if (path.node?.source?.value === "@radix-ui/colors") {
                path.remove()
            }
        },

        // Modify object props
        VariableDeclarator(path: NodePath<VariableDeclarator>) {
            if (path.node?.init?.type === "ObjectExpression") {
                path.node.init = modifyCssInJS(path.node.init)
            }
        },

        // Restructure css in js object
        CallExpression(path: NodePath<CallExpression>) {
            if (path.node.callee.type === "Identifier" && path.node.callee.name == 'styled' && path.node.arguments[1].type === "ObjectExpression") {
                const [comp, style] = path.node.arguments as [Identifier, ObjectExpression]
                path.node.arguments = [comp, modifyCssInJS(style)]
            }
        },

        //remover keyframes
        VariableDeclaration(path: NodePath<VariableDeclaration>) {
            const d = path.node.declarations[0]
            if (d.type === "VariableDeclarator" && d?.init?.type === "CallExpression" && d.init.callee.type === "Identifier" && d.init.callee.name === "keyframes") {
                if (d.id.type === "Identifier") {
                    path.node.declarations = [variableDeclarator(
                        d.id,
                        stringLiteral(d.id.name)
                    )]
                    report.keyframes = report.keyframes.includes(d.id.name) ? report.keyframes : [...report.keyframes, d.id.name]
                }
            }
        }
    },
});

const modifyCssInJS = (style: ObjectExpression) => {

    const ignoreProps = ["all", "variants", "defaultVariants"]

    const baseProps = style?.properties?.filter(it => it.type === "ObjectProperty" && ((it.key.type === "Identifier" && !ignoreProps.includes(it.key.name)) || it.key.type !== "Identifier")) ?? []
    const spreadProps = style?.properties?.filter<SpreadElement>((it): it is SpreadElement => it.type === "SpreadElement") ?? []
    const variantProps = style?.properties?.filter(it => it.type === "ObjectProperty" && (("name" in it.key && it.key.name === "variants"))) ?? []
    const defaultVariantsProps = style?.properties?.filter(it => it.type === "ObjectProperty" && (("name" in it.key && it.key.name === "defaultVariants"))) ?? []

    return modifyProps(
        objectExpression([
            objectProperty(
                identifier("base"),
                objectExpression([
                    ...baseProps,
                    ...spreadProps
                ])
            ),
            ...variantProps,
            ...defaultVariantsProps,
        ])
    )
}

const modifyProps = (node: ObjectExpression) => {

    const typeMap: Record<string, string> = {
        "1": "50",
        "2": "100",
        "3": "200",
        "4": "300",
        "5": "400",
        "6": "500",
        "7": "600",
        "8": "700",
        "9": "800",
        "10": "900",
        "11": "950",
        "12": "950",
    }

    traverse(node,
        {
            noScope: true,
            // replace number with string + px
            Property(path) {
                const keys = [
                    "flex",
                    "flexGrow",
                    "lineHeight"
                ]
                if (path.node?.key?.type === "Identifier" && !keys.includes(path.node.key.name)) {

                    if (path.node?.value?.type === "NumericLiteral") {
                        path.node.value = stringLiteral(`${path.node?.value.value}px`)
                    }
                }

            },
            // fix color imports
            MemberExpression(path) {
                if (path.node.object.type === "Identifier" && path.node.property.type === "Identifier") {
                    const colorName = path.node.object.name
                    const colorType = path.node.property.name
                    const colorCode = colorType.replace(colorName, "")
                    report.colors = report.colors.includes(colorName) ? report.colors : [...report.colors, colorName]
                    //@ts-ignore
                    if (colors[colorName] != null) {
                        path.replaceWith(stringLiteral(`{colors.${colorName}.${typeMap[colorCode]}}`))
                    }
                }
            }

        })

    return node

}
