<?php

namespace Devsite\LaravelTranslatable;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Devsite\LaravelTranslatable\Models\Translation;
use Devsite\LaravelTranslatable\Models\TranslationPhrase;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class Manager implements ManagerContract
{
    /**
     * @return void
     */
    public function scan(): void
    {
        $files = $this->getFiles();
        $matches = $this->getPhrases($files);
        foreach ($matches as [$match, $source]) {
            $phrase = TranslationPhrase::whereRaw('phrase = BINARY ?', [$match])->where('source', $source)->first();
            if (!$phrase) {
                $phrase = TranslationPhrase::create([
                    'phrase' => $match,
                    'source' => $source
                ]);
            }

            foreach (config('laravel-translatable.languages') as $lang) {
                $phrase->translations()->firstOrCreate([
                    'locale' => $lang
                ], [
                    'translation' => $phrase->phrase,
                ]);
            }
        }
    }

    public function generate(): void
    {
        foreach (config('laravel-translatable.languages') as $lang) {
            $json = json_encode(
                Translation::leftJoin(
                    config('laravel-translatable.db.tables.phrases.table'),
                    config('laravel-translatable.db.tables.phrases.table') . '.id',
                    config('laravel-translatable.db.tables.translations.table') . '.' . config('laravel-translatable.db.tables.translations.foreign_key_to_phrases')
                )->where('locale', $lang)->get([
                    'phrase' => config('laravel-translatable.db.tables.phrases.table') . '.phrase',
                    'translation' => config('laravel-translatable.db.tables.translations.table') . '.translation'
                ])->pluck('translation', 'phrase'),
                JSON_PRETTY_PRINT
            );
            app(Filesystem::class)->put($this->getSaveLangPath($lang), $json);
        }
    }

    /**
     * @return Collection
     */
    public function getFiles(): Collection
    {
        $files = new Collection;
        foreach (config('laravel-translatable.translation_paths') as $path) {
            $collection = new Collection(app(Filesystem::class)->allFiles($path));
            $files = $files->merge(
                $collection
                    ->filter(fn ($file) => in_array(app(Filesystem::class)->extension($file), config('laravel-translatable.file_extensions')))
            );
        }

        return $files->unique();
    }

    /**
     * @param Collection $files
     * @return array
     */
    public function getPhrases(Collection $files): array
    {
        $allMatches = [];

        foreach ($files as $file) {
            if (preg_match_all('/' . $this->getPattern() . '/siU', $file->getContents(), $matches)) {
                foreach ($matches[2] as $match) {
                    $allMatches[] = [$match, Str::replaceFirst(base_path(), '', $file->getRealPath())];
                }
            }
        }

        return $allMatches;
    }

    /**
     * @return string
     */
    public function getPattern(): string
    {
        /*
         * This pattern is derived from Barryvdh\TranslationManager by Barry vd. Heuvel <barryvdh@gmail.com>
         *
         * https://github.com/barryvdh/laravel-translation-manager/blob/master/src/Manager.php
         *
         * And has required modifications
         */

        $functions = config('laravel-translatable.translation_functions');

        return
            // See https://regex101.com/r/jS5fX0/4
            '[^\w]' . // Must not start with any alphanum or _
            '(?<!->)' . // Must not start with ->
            '(' . implode('|', $functions) . ')' .// Must start with one of the functions
            "\(" .// Match opening parentheses
            "[\'\"]" .// Match " or '
            '(' .// Start a new group to match:
            '(.*)*' .
            ')' .// Close group
            "[\'\"]" .// Closing quote
            "[\),]"  // Close parentheses or new parameter
            ;
    }

    protected function getSaveLangPath(string $lang): string
    {
        return sprintf('%s/%s', config('laravel-translatable.language_path'), $lang . '.json');
    }
}
