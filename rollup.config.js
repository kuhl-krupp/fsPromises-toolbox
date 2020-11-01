import typescriptPlugin from 'rollup-plugin-typescript2';
import clearPlugin from 'rollup-plugin-clear';
import filesizePlugin from 'rollup-plugin-filesize';

import typescript from 'typescript';
import pkg from './package.json';

const outputDir = 'dist';
const globals = {
    fs: 'fs',
    path: 'path'
};

/* eslint-disable import/no-default-export */
export default {
    input: 'src/index.ts',
    output: [
        {
            file: `${outputDir}/index.js`,
            format: 'cjs',
            globals
        },
        {
            file: `${outputDir}/index.es.js`,
            format: 'esm',
            globals
        },
        {
            name: 'OpenIcecat',
            file: `${outputDir}/index.umd.js`,
            format: 'umd',
            globals
        }
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        clearPlugin({
            targets: [outputDir],
            watch: true
        }),
        typescriptPlugin({
            typescript
        }),
        filesizePlugin({
            showBrotliSize: true
        })
    ]
};
/* eslint-enable import/no-default-export */
