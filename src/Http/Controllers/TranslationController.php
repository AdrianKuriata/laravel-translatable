<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Illuminate\Http\JsonResponse;

class TranslationController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json('test');
    }
}
