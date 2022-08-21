<?php

namespace Devsite\LaravelTranslatable\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    use HasFactory;

    public function getConnectionName()
    {
        return config('laravel-translatable.db.connection');
    }

    public function getTable()
    {
        return config('laravel-translatable.db.tables.translations.table');
    }

    public function getFillable()
    {
        return config('laravel-translatable.db.tables.translations.mass_assignment');
    }
}
