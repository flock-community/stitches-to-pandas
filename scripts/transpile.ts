import { transform } from "../src/babel/plugin";

import * as babel from '@babel/core';
import {resolve} from "path";
import {readdirSync, readFileSync, writeFileSync} from "node:fs";

const componentPath = resolve(__dirname, "../src/components");
const dir =  readdirSync(componentPath);

dir.forEach((it) => {
  const inputDir = resolve(__dirname, `../src/components/${it}/stitches.jsx`)
  const outputDir = resolve(__dirname, `../src/components/${it}/panda.jsx`)

  const code = String(readFileSync(inputDir));
  const output = babel.transformSync(code, {
    plugins: [
      "@babel/plugin-syntax-jsx",
      transform
    ],
  });

  if (!!output) {
    writeFileSync(outputDir, output?.code ?? "");
  }
})
