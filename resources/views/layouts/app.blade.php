<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ secure_asset(app()->environment('production') ? 'coviddb/js/app.js' : 'js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ secure_asset(app()->environment('production') ? 'coviddb/css/app.css' : 'css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <header class="relative bg-white dark:bg-darker">
        <div class="flex items-center justify-between p-2 border-b dark:border-blue-800">
            <a
                href="#"
                class="inline-block text-2xl font-bold tracking-wider text-blue-700 uppercase dark:text-light"
            >
                COVID-DB
            </a>
            <nav aria-label="Secondary" class="hidden space-x-2 md:flex md:items-center">
                <!-- Right Side Of Navbar -->
                <ul class="flex flex-row">
                </ul>
            </nav>
        </div>
    </header>
    <main>
        @yield('content')
    </main>
</div>
</body>
</html>
