import ts from '@rollup/plugin-typescript';
import path from 'path'

const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const resolve = (p) => path.resolve(packageDir, p)

console.log('argv', process.env)

export default {
  input: resolve('src/index.ts'),
  output: {
    name: 'vue',
    file: resolve(`dist/main.js`),
    format: `umd`
  },
  plugins: [
    ts()
  ]
};
