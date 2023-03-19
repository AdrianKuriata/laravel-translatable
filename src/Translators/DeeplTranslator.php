<?php

namespace Devsite\LaravelTranslatable\Translators;

use Devsite\LaravelTranslatable\Contracts\TranslatorContract;
use GuzzleHttp\Client;

class DeeplTranslator extends Translator implements TranslatorContract
{
    public string $freeUrl = 'https://api-free.deepl.com/v2/';

    public string $proUrl = 'https://api.deepl.com/v2/';

    public function translate(string $text, string $sourceLang, string $targetLang): string
    {
        $response = $this->client()->post('translate', [
            'form_params' => [
                'text' => $text,
                'source_lang' => $sourceLang,
                'target_lang' => $targetLang,
                'ignore_tags' => 'ignore'
            ]
        ]);

        return json_decode($response->getBody()->getContents(), true)['translations'][0]['text'];
    }

    public function usage(): array
    {
        $response = $this->client()->get('usage');
        return json_decode($response->getBody()->getContents(), true);
    }

    public function client(): Client
    {
        return new Client([
            'base_uri' => config('laravel-translatable.translators.drivers.deepl.version') === 'free'? $this->freeUrl : $this->proUrl,
            'headers' => [
                'Authorization' => 'DeepL-Auth-Key ' . config('laravel-translatable.translators.drivers.deepl.auth_key')
            ]
        ]);
    }
}
