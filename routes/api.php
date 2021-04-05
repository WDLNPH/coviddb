<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'regions'], function () {
    Route::get('autocomplete', 'Api\\RegionController@autocomplete');
});

Route::group(['prefix' => 'group-zones'], function () {
    Route::get('/', 'Api\\GroupZoneController@readAll');
});

Route::group(['prefix' => 'patients'], function () {
    Route::get('/', 'Api\\PatientController@readAll');
    Route::post('/', 'Api\\PatientController@create');
    Route::put('/{patientId}', 'Api\\PatientController@update');
    Route::get('/{patientId}', 'Api\\PatientController@readOne');
});
Route::group(['prefix' => 'symptoms'], function () {
    Route::get('/', 'Api\\SymptomController@readAll');
});

Route::group(['prefix' => 'queries'], function () {
    Route::get('case-one', 'Api\\QueryController@caseOne');
    Route::get('case-two', 'Api\\QueryController@caseTwo');
    Route::get('case-three', 'Api\\QueryController@caseThree');
    Route::get('case-four', 'Api\\QueryController@caseFour');
    Route::get('case-five', 'Api\\QueryController@caseFive');
    Route::get('case-six', 'Api\\QueryController@caseSix');
});
