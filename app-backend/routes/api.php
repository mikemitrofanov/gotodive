<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;

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
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::group(['middleware' => ['auth:sanctum', 'isAdmin']], function () {
    Route::post('/categories/{id}', [CategoryController::class, 'update']);
    Route::post('/category', [CategoryController::class, 'store']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/registration', [AuthController::class, 'registration']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::middleware('auth:sanctum')->get('/profile', [AuthController::class, 'getProfile']);
    Route::middleware('auth:sanctum')->post('/profile', [AuthController::class, 'updateProfile']);
});
