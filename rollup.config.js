import ts from '@rollup/plugin-typescript';

export default {
  input: 'test/index.ts',
  output: {
    file: 'dist/dist.js',
    format: 'cjs'
  },
  plugins: [
    ts()
  ]
};
