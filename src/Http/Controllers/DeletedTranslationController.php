<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\Services\DeletedTranslationServiceContract;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class DeletedTranslationController extends Controller
{
    public function __construct(protected DeletedTranslationServiceContract $service)
    {
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        return $this->service->index($request->search);
    }
}
