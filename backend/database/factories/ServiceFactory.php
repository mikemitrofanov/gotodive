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
            'title' => $this->faker->text(20),
            'description' => $this->faker->text(300),
            'duration' => $this->faker->numberBetween(1, 24) . ' minutes',
            'price' => $this->faker->numberBetween(50, 1000),
            'is_popular' => $this->faker->boolean(30),
            'short_description' => $this->faker->text(75),
            'min_age' => $this->faker->numberBetween(6, 30) . ' years',
            'required_experience' => $this->faker->boolean() ?? $this->faker->numberBetween(1, 24) . ' hours',
            'max_depth' => $this->faker->boolean() ?? $this->faker->numberBetween(1, 24) . ' meters',
            'course_certificate' => $this->faker->boolean() ?? $this->faker->text(300),
        ];
    }
}
