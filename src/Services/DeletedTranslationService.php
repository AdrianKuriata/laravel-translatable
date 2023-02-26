<?php

namespace Devsite\LaravelTranslatable\Services;

use Devsite\LaravelTranslatable\Contracts\Services\DeletedTranslationServiceContract;
use Devsite\LaravelTranslatable\Models\TranslationPhrase;
use Devsite\LaravelTranslatable\Resources\TranslationResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class DeletedTranslationService implements DeletedTranslationServiceContract
{
    public function index(string $search = null): AnonymousResourceCollection
    {
        return TranslationResource::collection(
            TranslationPhrase::onlyTrashed()->with('translations')
                ->when($search, fn ($query) => $query->where('phrase', 'LIKE', '%' . $search . '%'))
                ->paginate(config('laravel-translatable.lists.paginate', 10))
        );
    }
}
