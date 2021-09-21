<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Service::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'=>$this->faker->text(20),
            'link'=>$this->faker->safeEmail(),
            'description'=>$this->faker->text(),
            'duration'=>$this->faker->numberBetween(1,24) . ' minutes',
            'price'=>$this->faker->numberBetween(50, 1000) . ' $',
            'is_popular'=>$this->faker->boolean(30),
        ];
    }
}
