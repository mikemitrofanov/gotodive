<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
            'password' => 'password',
            'isAdmin' => true
        ]);
        User::create([
            'name' => 'Admin',
            'email' => 'email@example.com',
            'password' => 'password',
            'isAdmin' => true
        ]);

        User::factory()->count(5)->create();
    }
}
