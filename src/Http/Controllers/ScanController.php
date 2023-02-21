<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Illuminate\Http\JsonResponse;

class ScanController extends Controller
{
    public function __construct(protected ManagerContract $manager)
    {
    }

    public function __invoke(): JsonResponse
    {
        $this->manager->scan();

        return response()->json([
            'message' => 'Scanning files ended.',
            'type' => 'success'
        ]);
    }
}
