<?php

use Devsite\LaravelTranslatable\Http\Controllers\RestoreTranslationController;
use Devsite\LaravelTranslatable\Http\Controllers\RoutesController;
use Devsite\LaravelTranslatable\Http\Controllers\TranslationVueController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => config('laravel-translatable.routes.prefix'), 'as' => config('laravel-translatable.routes.as')], function () {
    Route::group(['prefix' => config('laravel-translatable.routes.links.translations.url'), 'as' => config('laravel-translatable.routes.links.translations.url') . '.'], function () {
        Route::post('restore/{translation_id}', RestoreTranslationController::class)->name('restore');
    });
    Route::resource(config('laravel-translatable.routes.links.translations.url'), config('laravel-translatable.routes.links.translations.controller'))->only('index', 'update', 'destroy');
    Route::resource(config('laravel-translatable.routes.links.deleted_translations.url'), config('laravel-translatable.routes.links.deleted_translations.controller'))->only('index');
    Route::post(config('laravel-translatable.routes.links.scan.url'), config('laravel-translatable.routes.links.scan.controller'))->name('scan');
    Route::post(config('laravel-translatable.routes.links.generate.url'), config('laravel-translatable.routes.links.generate.controller'))->name('generate');
});

Route::get('/laravel-translatable/routes', RoutesController::class);

Route::get('/', [TranslationVueController::class, 'index'])->name('index');
//Vue app Wildcard
Route::get('/{any?}', [TranslationVueController::class, 'index'])->where('any', '.*');
