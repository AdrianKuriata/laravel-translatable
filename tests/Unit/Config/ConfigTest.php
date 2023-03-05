<?php

namespace Devsite\LaravelTranslatable\Tests\Feature;

use Devsite\LaravelTranslatable\Tests\TestCase;

class ConfigTest extends TestCase
{
    public function testLanguagesIsArrayAndIsNotEmpty()
    {
        $config = $this->getConfig();
        $this->assertIsArray($config['translation_functions']);
        $this->assertNotEmpty($config['translation_functions']);
        foreach ($config['languages'] as $language) {
            $this->assertArrayHasKey('label', $language);
            $this->assertArrayHasKey('value', $language);
        }
    }

    public function testListPaginationIsInt()
    {
        $config = $this->getConfig();
        $this->assertIsInt($config['lists']['paginate']);
    }

    public function testLanguageSavePathIsString()
    {
        $config = $this->getConfig();
        $this->assertIsString($config['language_path']);
    }

    public function testTranslationsPathIsArrayAndIsNotEmpty()
    {
        $config = $this->getConfig();
        $this->assertIsArray($config['translation_paths']);
        $this->assertNotEmpty($config['translation_paths']);
    }

    public function testTranslationsFunctionsIsArrayAndIsNotEmpty()
    {
        $config = $this->getConfig();
        $this->assertIsArray($config['translation_functions']);
        $this->assertNotEmpty($config['translation_functions']);
    }

    public function testFileExtensionsIsArrayAndIsNotEmpty()
    {
        $config = $this->getConfig();
        $this->assertIsArray($config['file_extensions']);
        $this->assertNotEmpty($config['file_extensions']);
    }

    private function getConfig(): array
    {
        return $this->app->config->get('laravel-translatable');
    }
}
