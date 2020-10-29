import progress from 'rollup-plugin-progress';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import postCSS from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import clean from 'postcss-clean';

const env = process.env.NODE_ENV;

const base = {
    input: 'src/main.js',
    output: {
        file: 'dist/assets/main.js',
        format: 'iife',
        name: 'tcdw',
        sourcemap: (env !== 'production'),
    },
    plugins: [
        progress({
            clearLine: false,
        }),
        eslint({
            exclude: ['**/*.html', '**/*.css', '**/*.scss', '**/*.json'],
        }),
        postCSS({
            extract: true,
            plugins: [
                autoprefixer(),
                clean(),
            ],
        }),
        terser(),
    ],
};

export default base;
