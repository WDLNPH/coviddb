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

Route::group(['prefix' => 'dashboard-stats', 'middleware' => 'auth:api'], function () {
    Route::get('/', 'Api\\DashboardController@getUserStats');
});

Route::group(['prefix' => 'regions'], function () {
    Route::get('autocomplete', 'Api\\RegionController@autocomplete');
    Route::get('/', 'Api\\RegionController@readAll');
});

Route::group(['prefix' => 'group-zones'], function () {
    Route::get('/', 'Api\\GroupZoneController@readAll');
    Route::get('/{groupZoneId}', 'Api\\GroupZoneController@readOne');
});

Route::group(['prefix' => 'persons'], function () {
    Route::get('/', 'Api\\PersonController@readAll');
    Route::post('/', 'Api\\PersonController@create');
    Route::put('/{personID}', 'Api\\PersonController@update');
    Route::get('/{personID}', 'Api\\PersonController@readOne');
});

Route::group(['prefix' => 'patients'], function () {
    Route::get('/', 'Api\\PatientController@readAll');
    Route::post('/', 'Api\\PatientController@create');
    Route::put('/{patientId}', 'Api\\PatientController@update');
    Route::get('/{patientId}', 'Api\\PatientController@readOne');
});

Route::group(['prefix' => 'facilities'], function () {
    Route::get('/', 'Api\\FacilityController@readAll');
    Route::post('/', 'Api\\FacilityController@create');
    Route::put('/{facilityId}', 'Api\\FacilityController@update');
    Route::get('/{facilityId}', 'Api\\FacilityController@readOne');
});

Route::group(['prefix' => 'positions'], function () {
    Route::get('/', 'Api\\PositionController@readAll');
});

Route::group(['prefix' => 'workers'], function () {
    Route::get('/', 'Api\\WorkerController@readAll');
    Route::post('/', 'Api\\WorkerController@create');
    Route::put('/{workerId}', 'Api\\WorkerController@update');
    Route::delete('/{workerId}', 'Api\\WorkerController@delete');
    Route::get('/{workerId}', 'Api\\WorkerController@readOne');
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
