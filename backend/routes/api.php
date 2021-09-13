<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServiceCategoryController;
use App\Http\Controllers\ServiceController;
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

Route::get('/service-categories', [ServiceCategoryController::class, 'index']);
Route::get('/service-categories/services', [ServiceCategoryController::class, 'withServices']);
Route::get('/service-categories/{serviceCategory:id}', [ServiceCategoryController::class, 'show']);
Route::get('/service-categories/{serviceCategory:id}/services', [ServiceController::class, 'index']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);


Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/users/me', [AuthController::class, 'show']);
    Route::put('/users/me', [AuthController::class, 'update']);

    Route::group(['middleware' => ['isAdmin']], function () {
        Route::group(['prefix' => 'service-categories'], function () {
            Route::post('/', [ServiceCategoryController::class, 'store']);
            Route::put('/{serviceCategory:id}', [ServiceCategoryController::class, 'update']);
            Route::delete('/{serviceCategory:id}', [ServiceCategoryController::class, 'destroy']);
            Route::post('{serviceCategory:id}/services', [ServiceController::class, 'store']);

        });

        Route::put('/services/{service:id}', [ServiceController::class, 'update']);
        Route::delete('/services/{service:id}', [ServiceController::class, 'destroy']);
    });
});
