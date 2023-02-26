<?php

namespace Devsite\LaravelTranslatable\Contracts\Services;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface TranslationServiceContract
{
    public function index(string $search = null): AnonymousResourceCollection;

    public function update(array $data, int $translationId): void;

    public function restore(int $translationId): void;

    public function delete(int $translationId): void;
}
