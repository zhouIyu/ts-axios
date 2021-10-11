import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import camelCase from 'lodash.camelcase'

const pkg = require('./package.json')
const libraryName = pkg.name

export default {
  input: 'src/axios.ts',
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  watch: {
    include: 'src/**'
  },
  plugins: [json(), typescript({ useTsconfigDeclarationDir: true }), commonjs(), nodeResolve()]
}
