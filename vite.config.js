import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'

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
    ]
});
