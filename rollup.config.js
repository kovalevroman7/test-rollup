import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

const extensions = ['.js', '.jsx'];

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        nodeResolve({ extensions }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('develop'),
        }),
        babel({
            extensions,
            babelHelpers: 'bundled',
            include: ['src/**/*'],
        }),
        commonjs({ extensions }), // commonjs  располагаем после babel, несмотря на то, что в документации сказано обратное. Иначе нераспознаётся синтаксис jsx
    ],

};
