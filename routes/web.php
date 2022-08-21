<?php

use Illuminate\Support\Facades\Route;

Route::get('test', function () {
    dd(app(\Devsite\LaravelTranslatable\Manager::class)->generate());
});
