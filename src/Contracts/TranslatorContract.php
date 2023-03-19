<?php

namespace Devsite\LaravelTranslatable\Contracts;

use GuzzleHttp\Client;

interface TranslatorContract
{
    public function translate(string $text, string $sourceLang, string $targetLang): string;

    public function usage(): array;

    public function client(): Client;

    public function getVariables(string $translation): array;

    public function dropIgnoreTags(string $translation, array $originalListOfVariables): string;
}
