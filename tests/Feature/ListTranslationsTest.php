<?php

namespace Devsite\LaravelTranslatable\Tests\Feature;

use Devsite\LaravelTranslatable\Tests\TestCase;

class ListTranslationsTest extends TestCase
{
    public function testVisitTranslations()
    {
        $response = $this->get(route('api.translations.index'));
        dd($response);
    }
}
