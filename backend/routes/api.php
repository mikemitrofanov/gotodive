<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
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

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{category:id}', [CategoryController::class, 'show']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::group(['middleware' => ['auth:sanctum', 'isAdmin']], function () {
    Route::group(['prefix' => 'categories'], function () {
        Route::post('/', [CategoryController::class, 'store']);
        Route::put('/{category:id}', [CategoryController::class, 'update']);
        Route::delete('/{category:id}', [CategoryController::class, 'destroy']);
        Route::post('{category:id}/subcategories', [CategoryController::class, 'store']);
    });

    Route::put('/subcategories/{subcategory:id}', [CategoryController::class, 'update']);
    Route::delete('/subcategories/{subcategory:id}', [CategoryController::class, 'destroy']);
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/users', [UserController::class, 'show']);
    Route::put('/users', [UserController::class, 'update']);
});
