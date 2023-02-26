<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Tightenco\Ziggy\Ziggy;

class RoutesController extends Controller
{
    public function __construct()
    {
    }

    public function __invoke(): JsonResponse
    {
        return response()->json([
            'as' => config('laravel-translatable.routes.as'),
            'routes' => new Ziggy()
        ]);
    }
}
