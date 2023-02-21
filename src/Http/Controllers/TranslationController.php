<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Models\TranslationPhrase;
use Devsite\LaravelTranslatable\Resources\TranslationResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TranslationController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        return TranslationResource::collection(
            TranslationPhrase::with('translations')
                ->when($request->search, fn ($query) => $query->where('phrase', 'LIKE', '%' . $request->search . '%'))
                ->paginate(10)
        );
    }

    public function destroy(Request $request, int $translationId): JsonResponse
    {
        return response()->json([
            'message' => 'Translation was delete successfully.',
            'type' => 'success'
        ]);
    }
}
