<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
// use ;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorySeeder::class);
        $this->call(UserSeeder::class);
    }
}
