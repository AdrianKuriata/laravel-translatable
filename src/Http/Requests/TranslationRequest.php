<?php

namespace Devsite\LaravelTranslatable\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;

class TranslationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'translations.*.translation' => ['required', 'min:1'],
            'translations.*.locale' => ['required', Rule::in(Arr::pluck(config('laravel-translatable.languages', []), 'value'))]
        ];
    }
}
