<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>TEST</title>
    {{
        \Illuminate\Support\Facades\Vite::useHotFile(base_path('packages/devsite/laravel-translatable/public/hot'))
            ->useBuildDirectory('vendor/devsite/laravel-translatable/build')
            ->withEntryPoints(['resources/app/scss/app.scss'])
    }}
</head>
<body class="bg-slate-50">
<div id="app"></div>
{{
        \Illuminate\Support\Facades\Vite::useHotFile(base_path('packages/devsite/laravel-translatable/public/hot'))
            ->useBuildDirectory('vendor/devsite/laravel-translatable/build')
            ->withEntryPoints(['resources/app/app.js'])
    }}
</body>
</html>
