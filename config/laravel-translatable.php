<?php

return [
    /*
     * List of languages
     */
    'languages' => ['en'],

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
    ]
];
