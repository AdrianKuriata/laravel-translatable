import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    base: '/vendor/devsite/laravel-translatable/build',
    // build: {
    //     target: 'esnext'
    // },
    plugins: [
        topLevelAwait({
            // The export name of top-level await promise for each chunk module
            promiseExportName: "__tla",
            // The function to generate import names of top-level await promise in each chunk module
            promiseImportName: i => `__tla_${i}`
        }),
        laravel({
            input: [
                'resources/app/scss/app.scss',
                'resources/app/app.js'
            ],
            refresh: true
        }),
        vue(),
        vuetify()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
            '@app': path.resolve(__dirname, './resources/app'),
            '@store': path.resolve(__dirname, './resources/app/store'),
            '@plugins': path.resolve(__dirname, './resources/app/plugins'),
            'ziggy': path.resolve(__dirname, './vendor/tightenco/ziggy/dist/index.es.js'),
        },
    }
});
