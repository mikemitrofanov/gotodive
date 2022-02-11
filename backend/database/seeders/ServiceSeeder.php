<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

       $categories = ServiceCategory::all();
        $categories->each(function ($category) {
            $category->services()->saveMany(
                Service::factory()->count(rand(1, 7))->for($category)->create()
        );
    });
    }
}
