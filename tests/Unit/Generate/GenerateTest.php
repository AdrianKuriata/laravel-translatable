<?php

namespace Devsite\LaravelTranslatable\Tests\Feature;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Devsite\LaravelTranslatable\Models\TranslationPhrase;
use Devsite\LaravelTranslatable\Tests\TestCase;

class GenerateTest extends TestCase
{
        public function testGenerate()
        {
            $phrase = TranslationPhrase::create([
                'phrase' => 'test',
                'source' => [
                    '../..'
                ]
            ]);
            $phrase->translations()->createMany([
                [
                    'translation' => 'testPL',
                    'locale' => 'pl'
                ],
                [
                    'translation' => 'testEN',
                    'locale' => 'en'
                ]
            ]);
            $this->assertDatabaseHas('translation_phrases', [
                'phrase' => 'test'
            ]);
            $this->assertDatabaseHas('translations', [
                'locale' => 'pl',
                'translation' => 'testPL'
            ]);
            $this->assertDatabaseHas('translations', [
                'locale' => 'en',
                'translation' => 'testEN'
            ]);
            $this->assertDatabaseMissing('translations', [
                'locale' => 'es',
                'translation' => 'testES'
            ]);

            $this->app->config->set('laravel-translatable.language_path', lang_path());
            $manager = app(ManagerContract::class);
            $manager->generate();
            $this->assertDirectoryExists(lang_path());
            $this->assertFileExists(lang_path('pl.json'));
            $contentPL = file_get_contents(lang_path('pl.json'));
            $this->assertJsonStringEqualsJsonString('{"test": "testPL"}', $contentPL);

            $contentEN = file_get_contents(lang_path('en.json'));
            $this->assertJsonStringEqualsJsonString('{"test": "testEN"}', $contentEN);

            $contentES = file_get_contents(lang_path('es.json'));
            $this->assertJsonStringNotEqualsJsonString('{"test": "testES"}', $contentES);
        }
}
