import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import pkg from './package.json';
export default {
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
