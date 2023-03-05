<?php

namespace Devsite\LaravelTranslatable\Tests\Feature;

use Devsite\LaravelTranslatable\Tests\TestCase;

class ListDeletedTranslationsTest extends TestCase
{
    public function testVisitDeletedTranslations()
    {
        $response = $this->get(route('api.deleted_translations.index'));
        $response->assertOk();
        $response->assertJsonStructure(['data']);
    }
}
