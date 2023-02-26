<?php

return [
    /*
     * List of languages which should be translated
     */
    'languages' => [
        [
            'label' => 'EN',
            'value' => 'en'
        ],
        [
            'label' => 'PL',
            'value' => 'pl'
        ],
        [
            'label' => 'ES',
            'value' => 'es'
        ],
        [
            'label' => 'DE',
            'value' => 'de'
        ]
    ],

    /*
     * Configuring lists of data
     */
    'lists' => [
        /*
         * Items per page, default is always 10
         */
        'paginate' => 10
    ],

    /*
     * Path to save language generated JSON files
     */
    'language_path' => lang_path(),

    /*
     * List of paths for searching translation phrases
     */
    'translation_paths' => [
        resource_path('views'),
        app_path()
    ],

    /*
     * List of functions for searching translation phrases
     */
    'translation_functions' => ['__', 'trans', 'trans_choice', 'Lang::get', 'Lang::choice', 'Lang::trans', 'Lang::transChoice', '@lang', '@choice'],

    /*
     * List of files extensions for searching translations
     */
    'file_extensions' => ['php'],

    /*
     * Database configuration for translation models
     */
    'db' => [
        'connection' => env('DB_CONNECTION'),
        'tables' => [
            'phrases' => [
                'table' => 'translation_phrases',
                'mass_assignment' => ['phrase', 'source']
            ],
            'translations' => [
                'table' => 'translations',
                'foreign_key_to_phrases' => 'translation_phrase_id',
                'mass_assignment' => ['locale', 'translation']
            ]
        ]
    ],

    /*
     * Routes configuration
     */
    'routes' => [
        'prefix' => 'api',
        'as' => 'api.',
        'links' => [
            'translations' => [
                'url' => 'translations',
                'controller' => \Devsite\LaravelTranslatable\Http\Controllers\TranslationController::class
            ],
            'deleted_translations' => [
                'url' => 'deleted_translations',
                'controller' => \Devsite\LaravelTranslatable\Http\Controllers\DeletedTranslationController::class
            ],
            'scan' => [
                'url' => 'scan',
                'controller' => \Devsite\LaravelTranslatable\Http\Controllers\ScanController::class
            ],
            'generate' => [
                'url' => 'generate',
                'controller' => \Devsite\LaravelTranslatable\Http\Controllers\GenerateController::class
            ]
        ]
    ]
];
