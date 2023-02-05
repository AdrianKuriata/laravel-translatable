<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

class TranslationVueController extends Controller
{
    public function index(): \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
    {
        return view('laravel-translatable::index');
    }
}
