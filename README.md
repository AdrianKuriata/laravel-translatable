# Laravel Translatable
Package for simple manage translations in your app. You can scan for searching new translations or generate translation files. You can delete translations, which should be excluded from generated files.

![Laravel Translatable panel](https://i.imgur.com/Kok1kF1.png "Laravel Translatable panel")
![Laravel Translatable edit](https://i.imgur.com/RkruZH5.png "Laravel Translatable edit")

---

# Installation
In first step run `composer require devsite/laravel-translatable`

After that, in next step run `php artisan devsite:laravel-translatable:install` for install package, copy all required assets, config files etc.

!Remember, if you want change configuration, you need run `php artisan vendor:publish --tag=config-laravel-translatable`
# Config
Check config to configure your routes, database, list information, search paths, used methods etc.

# Translators
There is a possibility to automatically translate sentences with Google Translator and DeepL. Just configure drivers in config file and start make translations simple. With DeepL you can use basic or pro version. If you turn on DeepL translator, in the right top corner you will see information about your usage in current month.

# Test
For run tests for package, go to the package destination and run `vendor/bin/phpunit`.

# Commands
1. For scan for new languages, run `php artisan devsite:laravel-translatable:scan`
2. For generate language files, run `php artisan devsite:laravel-translatable:generate`

# TODO
1. Possibility translate with DeepL and Google Translator
