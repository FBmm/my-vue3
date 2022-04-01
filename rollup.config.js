import ts from '@rollup/plugin-typescript';
import path from 'path'

const packagesDir = path.resolve(__dirname, 'packages/runtime-dom')

const resolve = (p) => path.resolve(packagesDir, p)


export default {
  input: resolve('src/index.ts'),
  output: {
    file: path.resolve(__dirname, `dist/main.esm-bundler.js`),
    format: `es`
  },
  plugins: [
    ts()
  ]
};
