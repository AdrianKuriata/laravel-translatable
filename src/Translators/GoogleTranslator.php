<?php

namespace Devsite\LaravelTranslatable\Translators;

use Devsite\LaravelTranslatable\Contracts\TranslatorContract;
use GuzzleHttp\Client;

class GoogleTranslator extends Translator implements TranslatorContract
{
    public string $url = 'https://translation.googleapis.com/language/';

    public function translate(string $text, string $sourceLang, string $targetLang): string
    {
        $response = $this->client()->post('translate/v2', [
            'form_params' => [
                'q' => $text,
                'source' => $sourceLang,
                'target' => $targetLang
            ]
        ]);

        return json_decode($response->getBody()->getContents(), true)['data']['translations'][0]['translatedText'];
    }

    public function usage(): array
    {
        return [];
    }

    public function client(): Client
    {
        return new Client([
            'base_uri' => $this->url,
            'headers' => [
                'Authorization' => 'Bearer ' . config('laravel-translatable.translators.drivers.google.auth_key')
            ]
        ]);
    }
}
