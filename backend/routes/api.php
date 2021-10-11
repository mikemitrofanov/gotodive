<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServiceCategoryController;
use App\Http\Controllers\ServiceController;
use Illuminate\Support\Facades\Route;
use \Illuminate\Foundation\Auth\EmailVerificationRequest;
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
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth:sanctum')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verifyEmail'])->middleware(['auth:sanctum'])->name('verification.verify');

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('register', [AuthController::class, 'register']);

Route::group(['prefix' => '{language}', 'middleware' => ['setLanguage']], function () {

    Route::get('/service-categories', [ServiceCategoryController::class, 'index']);
    Route::get('/service-categories/services', [ServiceCategoryController::class, 'withServices']);
    Route::get('/service-categories/{serviceCategory}', [ServiceCategoryController::class, 'show']);
    Route::get('/service-categories/{serviceCategory}/services', [ServiceController::class, 'index']);
    Route::get('/services/popular', [ServiceController::class, 'showPopular']);
    Route::get('/services/{service}', [ServiceController::class, 'show']);

    Route::group(['middleware' => ['auth:sanctum']], function () {

        Route::get('/users/me', [AuthController::class, 'show']);
        Route::put('/users/me', [AuthController::class, 'update']);

        Route::group(['middleware' => ['isAdmin']], function () {
            Route::apiResource('/service-categories', ServiceCategoryController::class)->except('index', 'show');
            Route::post('/service-categories/{serviceCategory}/services', [ServiceController::class, 'store']);
            Route::apiResource('/services', ServiceController::class)->only(['update', 'destroy']);
        });
    });
});
