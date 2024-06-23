import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const externalModules = ['util', 'inherits'];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'auto'
    },
    external: externalModules,
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      commonjs({ ignore: externalModules }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-transform-runtime']
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm'
    },
    external: externalModules,
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      commonjs({ ignore: externalModules }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-transform-runtime']
      })
    ]
  }
];
