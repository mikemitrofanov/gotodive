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
        $duration = $this->faker->numberBetween(2, 30);
        $experience = $this->faker->numberBetween(1, 24);

        return [
            'title' => [
                'en' => $this->faker->text(15),
                'ukr' => $this->faker->text(20),
                'ru' => $this->faker->text(25),
            ],
            'description' => [
                'en' => $this->faker->text(250),
                'ukr' => $this->faker->text(300),
                'ru' => $this->faker->text(350),
            ],
            'duration' => [
                'en' => $duration . ' minutes',
                'ukr' => $duration . ' Nederlands',
                'ru' => $duration . ' минут',

            ],
            'short_description' => [
                'en' => $this->faker->text(75),
                'ukr' => $this->faker->text(60),
                'ru' => $this->faker->text(90),
            ],
            'required_experience' => $this->faker->boolean() ? [
                    'en' => $experience . ' hours',
                    'ukr' => $experience . ' Nederlands',
                    'ru' => $experience . ' часов',
                ]:null,
            'course_certificate' => $this->faker->boolean() ? [
                    'en' => $this->faker->text(250),
                    'ukr' => $this->faker->text(300),
                    'ru' => $this->faker->text(350),
                ]:null,
            'price' => $this->faker->numberBetween(50, 1000),
            'is_popular' => $this->faker->boolean(30),
            'min_age' => $this->faker->numberBetween(6, 30),
            'max_depth' => $this->faker->boolean() ?? $this->faker->numberBetween(1, 24),

        ];
    }
}
