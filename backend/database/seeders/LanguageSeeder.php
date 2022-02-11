<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = ['ru', 'en', 'uk'];
        foreach ($languages as $lang) {
            Language::create([
                'language_code' => $lang
            ]);
        };
    }
}
