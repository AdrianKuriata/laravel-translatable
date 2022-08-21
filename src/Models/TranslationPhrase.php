<?php

namespace Devsite\LaravelTranslatable\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TranslationPhrase extends Model
{
    use HasFactory;

    public function getConnectionName()
    {
        return config('laravel-translatable.db.connection');
    }

    public function getTable()
    {
        return config('laravel-translatable.db.tables.phrases.table');
    }

    public function getFillable()
    {
        return config('laravel-translatable.db.tables.phrases.mass_assignment');
    }

    public function translations(): HasMany
    {
        return $this->hasMany(Translation::class, config('laravel-translatable.db.tables.translations.foreign_key_to_phrases'));
    }
}
