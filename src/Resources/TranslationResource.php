<?php

namespace Devsite\LaravelTranslatable\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class TranslationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $languages = new Collection(config('laravel-translatable.languages'));
        $translations = $this->translations->map(function ($translation) use ($languages) {
            $locale = $languages->where(fn ($item) => $item['value'] == $translation->locale)->first();
            return [
                'id' => $translation->id,
                'translation' => $translation->translation,
                'locale' => $translation->locale,
                'locale_name' => $locale['label'] ?? '-',
                'is_translated' => $this->phrase !== $translation->translation
            ];
        });
        return [
            'id' => $this->id,
            'source' => $this->source,
            'phrase' => $this->phrase,
            'translations' => $translations,
            'languages' => $translations->pluck('is_translated', 'locale_name')
        ];
    }
}
