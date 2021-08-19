<?php

namespace Database\Seeders;

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
        DB::table('users')->insert([
            'name' => 'Danis',
            'email' => 'test@test.com',
            'password' => bcrypt('pass')
        ]);

        DB::table('users')->insert([
            'name' => 'Danis Admin',
            'email' => 'admin@test.com',
            'password' => bcrypt('pass'),
            'isAdmin' => true
        ]);
    }
}
