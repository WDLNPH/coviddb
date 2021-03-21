<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/app');
Route::get('/portal/{path?}', function () {
    return File::get(base_path('webapp1/build/index.html'));
})->where('path', '.*');;
Route::view('/app/{path?}', 'app');
