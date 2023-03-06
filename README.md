# Laravel Translatable
Package for simple manage translations in your app. You can scan for searching new translations or generate translation files. You can delete translations, which should be excluded from generated files.

![Laravel Translatable panel](https://i.imgur.com/Kok1kF1.png "Laravel Translatable panel")

---

# Installation
In first step run `composer require devsite/laravel-translatable`

After than, in next step run `php artisan devsite:laravel-translatable:install` for install package, copy all required assets, config files etc.

# Requirements
```json
"php": ">=8.1.0",
"laravel/framework": ">=9.0",
"tightenco/ziggy": "^1.5"
```

# Used dependencies
```json
"@fortawesome/fontawesome-svg-core": "^6.3.0",
"@fortawesome/free-solid-svg-icons": "^6.3.0",
"@fortawesome/vue-fontawesome": "^3.0.3",
"@vitejs/plugin-vue": "^4.0.0",
"autoprefixer": "^10.4.13",
"axios": "^0.27",
"laravel-vite-plugin": "^0.7.3",
"lodash": "^4.17.19",
"postcss": "^8.4.21",
"sass": "^1.58.0",
"tailwind": "^4.0.0",
"tailwindcss": "^3.2.4",
"vite": "^4.1.1",
"vue": "^3.2.47",
"vue-router": "^4.1.6",
"vuex": "^4.0.2",
"vuetify": "^3.1.4",
"vite-plugin-vuetify": "^1.0.2",
"vite-plugin-top-level-await": "^1.3.0"
```

# Config
Check config to configure your routes, database, list information, search paths, used methods etc.

# Test
For run tests for package, go to the package destination and run `vendor/bin/phpunit`.

# Commands
1. For scan for new languages, run `php artisan devsite:laravel-translatable:scan`
2. For generate language files, run `php artisan devsite:laravel-translatable:generate`

# TODO
1. Possibility translate with DeepL and Google Translator
