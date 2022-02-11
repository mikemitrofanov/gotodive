<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Orchid\Platform\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => env('ADMIN_PASSWORD', 'password'),
            'isAdmin' => true
        ])->addRole(Role::firstWhere('slug', 'admin'));
        User::create([
            'name' => 'Moderator',
            'email' => 'email@example.com',
            'password' => env('MODERATOR_PASSWORD', 'password'),
            'isAdmin' => true

        ])->addRole(Role::firstWhere('slug', 'moderator'));

        User::factory()->count(5)->create();
    }
}
