<?php

namespace Devsite\LaravelTranslatable\Services;

use Devsite\LaravelTranslatable\Contracts\Services\TranslationServiceContract;
use Devsite\LaravelTranslatable\Models\Translation;
use Devsite\LaravelTranslatable\Models\TranslationPhrase;
use Devsite\LaravelTranslatable\Resources\TranslationResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TranslationService implements TranslationServiceContract
{
    public function index(string $search = null): AnonymousResourceCollection
    {
        return TranslationResource::collection(
            TranslationPhrase::with('translations')
                ->when($search !== null, fn ($query) => $query->where('phrase', 'LIKE', '%' . $search . '%'))
                ->paginate(config('laravel-translatable.lists.paginate', 10))
        );
    }

    public function update(array $data, int $translationId): void
    {
        foreach ($data['translations'] as $item) {
            Translation::updateOrCreate([
                    config('laravel-translatable.db.tables.translations.foreign_key_to_phrases') => $translationId,
                    'locale' => $item['locale']
                ], [
                    'translation' => $item['translation']
                ]);
        }
    }

    public function restore(int $translationId): void
    {
        $phrase = TranslationPhrase::onlyTrashed()->find($translationId);
        $phrase->restore();
    }

    public function delete(int $translationId): void
    {
        $phrase = TranslationPhrase::find($translationId);
        $phrase->delete();
    }
}
