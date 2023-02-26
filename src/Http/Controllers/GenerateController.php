<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Illuminate\Http\JsonResponse;

class GenerateController extends Controller
{
    public function __construct(protected ManagerContract $manager)
    {
    }

    public function __invoke(): JsonResponse
    {
        $this->manager->generate();

        return response()->json([
            'message' => 'Generating files ended.',
            'type' => 'success'
        ]);
    }
}
