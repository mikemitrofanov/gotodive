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
        User::class->insert([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => bcrypt('password'),
            'isAdmin' => true
        ]);
        User::class->insert([
            'name' => 'Admin',
            'email' => 'email@example.com',
            'password' => bcrypt('password'),
            'isAdmin' => true
        ]);

        User::factory()->count(5)->create();
    }
}
