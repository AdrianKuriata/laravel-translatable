<?php

use Devsite\LaravelTranslatable\Http\Controllers\TranslationController;
use Devsite\LaravelTranslatable\Http\Controllers\TranslationVueController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api', 'as' => 'api.'], function () {
    Route::resource('translations', TranslationController::class);
});

Route::get('/', [TranslationVueController::class, 'index'])->name('index');
//Vue app Wildcard
Route::get('/{any?}', [TranslationVueController::class, 'index'])->where('any', '.*');
