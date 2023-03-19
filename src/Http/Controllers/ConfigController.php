<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\TranslatorContract;
use Illuminate\Http\JsonResponse;

class ConfigController extends Controller
{
    public function __construct(protected TranslatorContract $translatorContract)
    {
    }

    public function __invoke(): JsonResponse
    {
        return response()->json([
            'translator_on' => config('laravel-translatable.translators.default') !== null,
            'driver' => config('laravel-translatable.translators.default'),
            'usage' => $this->translatorContract->usage()
        ]);
    }
}
