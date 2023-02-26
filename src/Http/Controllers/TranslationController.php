<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\Services\TranslationServiceContract;
use Devsite\LaravelTranslatable\Http\Requests\TranslationRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TranslationController extends Controller
{
    public function __construct(protected TranslationServiceContract $service)
    {
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        return $this->service->index($request->search);
    }

    public function update(TranslationRequest $request, int $translationId): JsonResponse
    {
        $this->service->update($request->validated(), $translationId);
        return response()->json([
            'message' => 'Translation has been updated successfully.',
            'type' => 'success'
        ]);
    }

    public function destroy(Request $request, int $translationId): JsonResponse
    {
        $this->service->delete($translationId);
        return response()->json([
            'message' => 'Translation has been deleted successfully.',
            'type' => 'success'
        ]);
    }
}
