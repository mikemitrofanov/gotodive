<?php

namespace Database\Seeders;

use App\Models\Photo;
use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class PhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Storage::deleteDirectory('public/images');
        Storage::deleteDirectory('public/optimized');
        Storage::makeDirectory('public/images');
        Storage::makeDirectory('public/optimized');

        $services = Service::all();
        $services->each(function ($service) {
            $service->photos()->saveMany(
                Photo::factory()->count(rand(1, 4))->for($service)->create(['is_shown' => true])
            );
        });

        Photo::factory()->count(10)->create();
    }
}
