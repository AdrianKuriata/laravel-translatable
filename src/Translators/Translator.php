<?php

namespace Devsite\LaravelTranslatable\Translators;

use Devsite\LaravelTranslatable\Contracts\TranslatorContract;
use GuzzleHttp\Client;
use Illuminate\Support\Arr;

class Translator implements TranslatorContract
{
    public function translate(string $text, string $sourceLang, string $targetLang): string
    {
        return '';
    }

    public function usage(): array
    {
        return [];
    }

    public function client(): Client
    {
        return new Client([
            'base_uri' => 'https://example.test'
        ]);
    }

    public function getVariables(string $translation): array
    {
        preg_match_all('/:\S\w+/m', $translation, $matches, PREG_SET_ORDER);
        return Arr::collapse($matches);
    }

    public function fixVariables(string $translation, array $originalListOfVariables): string
    {
        foreach ($this->getVariables($translation) as $key => $match) {
            $translation = str_replace($match, $originalListOfVariables[$key], $translation);
        }

        return $translation;
    }
}
