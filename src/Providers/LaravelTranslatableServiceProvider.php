<?php

namespace Devsite\LaravelTranslatable\Providers;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Devsite\LaravelTranslatable\Manager;
use Illuminate\Support\ServiceProvider;

class LaravelTranslatableServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../../config/laravel-translatable.php', 'laravel-translatable'
        );

        $this->app->bind(ManagerContract::class, Manager::class);
    }

    public function boot()
    {
        // Load required routes
        $this->loadRoutesFrom(__DIR__ . '/../../routes/web.php');

        // Load required migrations
        $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');

        // Public required configuration file
        $this->publishes([
            __DIR__.'/../../config/laravel-translatable.php' => config_path('laravel-translatable.php'),
        ]);
    }
}
