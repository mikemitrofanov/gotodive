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
                'en' => $this->faker->realText(15),
                'uk' => $this->faker->realText(20),
                'ru' => $this->faker->realText(25),
            ],
            'description' => [
                'en' => $this->faker->realText(250),
                'uk' => $this->faker->realText(300),
                'ru' => $this->faker->realText(350),
            ],
            'duration' => [
                'en' => $duration . ' minutes',
                'uk' => $duration . ' хвилин',
                'ru' => $duration . ' минут',

            ],
            'short_description' => [
                'en' => $this->faker->realText(75),
                'uk' => $this->faker->realText(60),
                'ru' => $this->faker->realText(90),
            ],
            'required_experience' => $this->faker->boolean() ? [
                    'en' => $experience . ' hours',
                    'uk' => $experience . 'годин',
                    'ru' => $experience . ' часов',
                ]:null,
            'course_certificate' => $this->faker->boolean() ? [
                    'en' => $this->faker->realText(250),
                    'uk' => $this->faker->realText(300),
                    'ru' => $this->faker->realText(350),
                ]:null,
            'price' => $this->faker->numberBetween(50, 1000),
            'is_popular' => $this->faker->boolean(30),
            'min_age' => $this->faker->numberBetween(6, 30),
            'max_depth' => $this->faker->boolean() ?? $this->faker->numberBetween(1, 24),

        ];
    }
}
