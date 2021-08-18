<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'title' => 'Дайвинг',
            'link' => '/diving',
            'order' => 1,
        ]);
    
        DB::table('categories')->insert([
            'title' => 'Специализации',
            'link' => '/specializations',
            'order' => 2,
        ]);



        DB::table('categories')->insert([
            'title' => 'Scuba Diving',
            'link' => '/scuba-diving',
            'order' => 3,
        ]);

        DB::table('categories')->insert([
            'title' => 'Supervised Diver ,(Scuba Diver)',
            'link' => '/supervised-diver',
            'order' => 4,
        ]);

        DB::table('categories')->insert([
            'title' => 'Open Water Diver',
            'link' => '/open-water-diver',
            'order' => 5,
        ]);



        DB::table('categories')->insert([
            'title' => 'Advanced Open Water Divier',
            'link' => '/advanced-open-water-diver',
            'order' => 6,
        ]);

        DB::table('categories')->insert([
            'title' => 'Recreational Trimix Diver',
            'link' => '/recreational-trimix-diver',
            'order' => 7,
        ]);

        DB::table('categories')->insert([
            'title' => 'Rescue Diver',
            'link' => '/rescue-diver',
            'order' => 8,
        ]);

        DB::table('categories')->insert([
            'title' => 'Elite Diver / Master Diver',
            'link' => '/elite-master-diver',
            'order' => 9,
        ]);

        DB::table('categories')->insert([
            'title' => 'Complex Navigation Diver',
            'link' => '/complex-navigation-diver',
            'order' => 10,
        ]);

        DB::table('categories')->insert([
            'title' => 'Deep Diver',
            'link' => '/deep-diver',
            'order' => 11,
        ]);

        DB::table('categories')->insert([
            'title' => 'Drift Diver',
            'link' => '/drift-diver',
            'order' => 12,
        ]);

        DB::table('categories')->insert([
            'title' => 'Dry Suit Diver',
            'link' => '/dty-suit-diver',
            'order' => 13,
        ]);
    }
}
