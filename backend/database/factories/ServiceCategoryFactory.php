<?php

namespace Database\Factories;

use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;

class ServiceCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ServiceCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => [
                'en' => FakerFactory::create('en_US')->realText(10),
                'uk' => FakerFactory::create('uk_UA')->realText(10),
                'ru' => FakerFactory::create('ru_RU')->realText(10),
            ],
        ];
    }
}
