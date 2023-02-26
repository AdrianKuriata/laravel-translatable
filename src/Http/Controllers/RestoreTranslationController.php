<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\Services\TranslationServiceContract;
use Illuminate\Http\JsonResponse;

class RestoreTranslationController extends Controller
{
    public function __construct(protected TranslationServiceContract $service)
    {
    }

    public function __invoke(int $translationId): JsonResponse
    {
        $this->service->restore($translationId);

        return response()->json([
            'message' => 'Translation has been restored successfully.',
            'type' => 'success'
        ]);
    }
}
