<?php

namespace Devsite\LaravelTranslatable\Contracts\Services;

use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

interface DeletedTranslationServiceContract
{
    public function index(string $search = null): AnonymousResourceCollection;
}
