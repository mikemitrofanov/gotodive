<?php

declare(strict_types=1);

use App\Orchid\Screens\PlatformScreen;
use App\Orchid\Screens\Role\RoleEditScreen;
use App\Orchid\Screens\Role\RoleListScreen;
use App\Orchid\Screens\Category\ServiceCategoryCreateScreen;
use App\Orchid\Screens\Category\ServiceCategoryScreen;
use App\Orchid\Screens\Contact\ContactScreen;
use App\Orchid\Screens\Service\ServiceScreen;
use App\Orchid\Screens\User\UserEditScreen;
use App\Orchid\Screens\User\UserListScreen;
use App\Orchid\Screens\User\UserProfileScreen;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;
use App\Orchid\Screens\Service\ServiceCreateScreen;
use \App\Orchid\Screens\Language\LanguageScreen;
/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the need "dashboard" middleware group. Now create something great!
|
*/

// Main
Route::screen('/main', PlatformScreen::class)
    ->name('platform.main');

// Platform > Profile
Route::screen('profile', UserProfileScreen::class)
    ->name('platform.profile')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.index')
            ->push(__('Profile'), route('platform.profile'));
    });

// Platform > System > Users
Route::screen('users/{user}/edit', UserEditScreen::class)
    ->name('platform.systems.users.edit');

// Platform > System > Users > Create
Route::screen('users/create', UserEditScreen::class)
    ->name('platform.systems.users.create')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.systems.users')
            ->push(__('Create'), route('platform.systems.users.create'));
    });

// Platform > System > Users > User
Route::screen('users', UserListScreen::class)
    ->name('platform.systems.users')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.index')
            ->push(__('Users'), route('platform.systems.users'));
    });

// Platform > System > Roles > Role
Route::screen('roles/{roles}/edit', RoleEditScreen::class)
    ->name('platform.systems.roles.edit')
    ->breadcrumbs(function (Trail $trail, $role) {
        return $trail
            ->parent('platform.systems.roles')
            ->push(__('Role'), route('platform.systems.roles.edit', $role));
    });

// Platform > System > Roles > Create
Route::screen('roles/create', RoleEditScreen::class)
    ->name('platform.systems.roles.create')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.systems.roles')
            ->push(__('Create'), route('platform.systems.roles.create'));
    });

// Platform > System > Roles
Route::screen('roles', RoleListScreen::class)
    ->name('platform.systems.roles')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.index')
            ->push(__('Roles'), route('platform.systems.roles'));
    });


Route::screen('categories', ServiceCategoryScreen::class)
    ->name('platform.categories')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.index')
            ->push('Service Category', route('platform.categories'));
    });

Route::screen('categories/create', ServiceCategoryCreateScreen::class)
    ->name('platform.categories.create')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.categories')
            ->push('Create new Category');
    });

Route::screen('categories/{category}/edit/{lang?}', ServiceCategoryCreateScreen::class)
    ->name('platform.categories.edit')
    ->breadcrumbs(function (Trail $trail, $category) {
        return $trail
            ->parent('platform.categories')
            ->push('Edit Category', route('platform.categories.edit', $category));
    });

Route::screen('categories/{category}/services/create', ServiceCreateScreen::class)
    ->name('platform.services.create')
    ->breadcrumbs(function (Trail $trail, $category) {
        return $trail
            ->parent('platform.categories.edit', $category)
            ->push('New Service');
    });

Route::screen('services/{service}/edit/{lang?}', ServiceScreen::class)
    ->name('platform.services.edit')
    ->breadcrumbs(function (Trail $trail, $service) {
        return $trail
            ->parent('platform.categories.edit', $service->serviceCategory)
            ->push('Service');
    });

Route::screen('languages', LanguageScreen::class)
    ->name('platform.languages')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.index')
            ->push('Supported Languages');
    });


Route::screen('contacts', ContactScreen::class)
    ->name('platform.contacts')
    ->breadcrumbs(function (Trail $trail) {
        return $trail
            ->parent('platform.index')
            ->push('Contacts');
    });
