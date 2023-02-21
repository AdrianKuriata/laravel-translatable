import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/app/scss/app.scss',
                'resources/app/app.js'
            ],
            refresh: true
        }),
        vue()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
            '@app': path.resolve(__dirname, './resources/app'),
            '@store': path.resolve(__dirname, './resources/app/store'),
            '@plugins': path.resolve(__dirname, './resources/app/plugins')
        },
    }
});
