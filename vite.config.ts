import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

/// <reference types="vite-plugin-svgr/client" />
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@shared',
                replacement: path.resolve(__dirname, './src/shared'),
            },
            {
                find: '@app',
                replacement: path.resolve(__dirname, './src/app'),
            },
            {
                find: '@features',
                replacement: path.resolve(__dirname, './src/features'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, './src/pages'),
            },
            {
                find: '@entities',
                replacement: path.resolve(__dirname, './src/entities'),
            },
            {
                find: '@widgets',
                replacement: path.resolve(__dirname, './src/widgets'),
            },
        ],
    },
    server: {
        port: 8000,
    },
});
