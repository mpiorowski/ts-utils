import typescript from '@rollup/plugin-typescript';
export default {
  input: 'src/index.ts',
  output: {
    dir: 'package',
  },
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
};
