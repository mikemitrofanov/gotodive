<?php

namespace Database\Seeders;

use App\Models\Photo;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(LanguageSeeder::class);
        $this->call(ServiceCategorySeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(PhotoSeeder::class);

    }
}
