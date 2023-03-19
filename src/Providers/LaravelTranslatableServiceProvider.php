<?php

namespace Devsite\LaravelTranslatable\Providers;

use Devsite\LaravelTranslatable\Console\Commands\GenerateLaravelTranslatableCommand;
use Devsite\LaravelTranslatable\Console\Commands\InstallLaravelTranslatableCommand;
use Devsite\LaravelTranslatable\Console\Commands\ScanLaravelTranslatableCommand;
use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Devsite\LaravelTranslatable\Contracts\Services\DeletedTranslationServiceContract;
use Devsite\LaravelTranslatable\Contracts\Services\TranslationServiceContract;
use Devsite\LaravelTranslatable\Contracts\TranslatorContract;
use Devsite\LaravelTranslatable\Manager;
use Devsite\LaravelTranslatable\Services\DeletedTranslationService;
use Devsite\LaravelTranslatable\Services\TranslationService;
use Devsite\LaravelTranslatable\Translators\Translator;
use Illuminate\Support\ServiceProvider;

class LaravelTranslatableServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../../config/laravel-translatable.php', 'laravel-translatable'
        );

        $this->app->bind(ManagerContract::class, Manager::class);
        $this->app->bind(TranslationServiceContract::class, TranslationService::class);
        $this->app->bind(DeletedTranslationServiceContract::class, DeletedTranslationService::class);
        $this->app->bind(
            TranslatorContract::class,
            config('laravel-translatable.translators.default') !== null
                ? config('laravel-translatable.translators.drivers.' . config('laravel-translatable.translators.default') . '.class')
                : Translator::class
        );
    }

    public function boot()
    {
        // Load required routes
        $this->loadRoutesFrom(__DIR__ . '/../../routes/web.php');

        // Load required migrations
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');

        // Load required views
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'laravel-translatable');

        // Public required configuration file
        $this->publishes([
            __DIR__.'/../../config/laravel-translatable.php' => config_path('laravel-translatable.php'),
        ], 'config-laravel-translatable');

        // Public required files
        $this->publishes([
            __DIR__.'/../../public' => public_path('vendor/devsite/laravel-translatable'),
        ], 'public-laravel-translatable');

        // Publish commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallLaravelTranslatableCommand::class,
                ScanLaravelTranslatableCommand::class,
                GenerateLaravelTranslatableCommand::class
            ]);
        }
    }
}
