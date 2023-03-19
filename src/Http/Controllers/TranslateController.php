<?php

namespace Devsite\LaravelTranslatable\Http\Controllers;

use Devsite\LaravelTranslatable\Contracts\TranslatorContract;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class TranslateController extends Controller
{
    public function __construct(protected TranslatorContract $translator)
    {
    }

    public function __invoke(Request $request): JsonResponse
    {
        $toTranslate = Arr::where($request->translations ?? [], fn($item) => $item['locale'] !== config('app.locale'));
        $items = [];
        if (!empty($toTranslate)) {
            foreach ($toTranslate as $translation) {
                $items[] = [
                    'locale' => $translation['locale'],
                    'translation' => $this->translator->dropIgnoreTags(
                        $this->translator->translate(
                            $translation['translation'], config('app.locale'), $translation['locale']
                        ),
                        $this->translator->getVariables($translation['translation'])
                    )
                ];
            }
        }

        return response()->json([
            'items' => $items,
            'message' => 'Translating phrases ended.',
            'type' => 'success'
        ]);
    }
}
