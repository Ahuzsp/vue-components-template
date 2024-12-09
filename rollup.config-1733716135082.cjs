'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('rollup-plugin-node-resolve');
var typescript = require('rollup-plugin-typescript2');
var postcss = require('rollup-plugin-postcss');
var cssnano = require('cssnano');
var pkg = require('./package.json');

var rollup_config = {
  input: './src/index.ts',
  output: [
    {
      // cjs（commonjs nodejs模块）
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      // esm（es模块）
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      // （自执行函数）
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true,
      name: 'Message',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {}), 'vue'],
  plugins: [
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [cssnano()],
      extract: 'message.css'
    })
  ],
};

exports.default = rollup_config;
