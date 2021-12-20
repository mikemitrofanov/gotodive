<?php

namespace Database\Factories;

use App\Models\Service;
use Faker\Factory as FakerFactory;
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
        $depth = $this->faker->numberBetween(1, 24);

        $faker_ru = FakerFactory::create('ru_RU');
        $faker_uk = FakerFactory::create('uk_UA');
        $faker_en = FakerFactory::create('en_US');

        return [
            'title' => [
                'en' => $faker_en->realText(15),
                'uk' => $faker_uk->realText(20),
                'ru' => $faker_ru->realText(25),
            ],
            'description' => [
                'en' => $faker_en->realText(250),
                'uk' => $faker_uk->realText(300),
                'ru' => $faker_ru->realText(350),
            ],
            'duration' => [
                'en' => $duration . ' minutes',
                'uk' => $duration . ' хвилин',
                'ru' => $duration . ' минут',

            ],
            'short_description' => [
                'en' => $faker_en->realText(75),
                'uk' => $faker_uk->realText(60),
                'ru' => $faker_ru->realText(90),
            ],
            'required_experience' => $this->faker->boolean() ? [
                'en' => $experience . ' hours',
                'uk' => $experience . ' годин',
                'ru' => $experience . ' часов',
            ] : null,
            'course_certificate' => $this->faker->boolean() ? [
                'en' => $faker_en->realText(250),
                'uk' => $faker_uk->realText(300),
                'ru' => $faker_ru->realText(350),
            ] : null,
            'price' => $this->faker->numberBetween(50, 1000),
            'is_popular' => $this->faker->boolean(30),
            'min_age' => $this->faker->numberBetween(6, 30),
            'max_depth' => $this->faker->numberBetween(1, 24),

            'certification_requirements' => [
                'en' => $faker_en->realText(75),
                'uk' => $faker_uk->realText(60),
                'ru' => $faker_ru->realText(90),
            ],
            'min_logged_dives' => $this->faker->boolean() ? $this->faker->numberBetween(1, 30) : null,
            'max_end' => $this->faker->boolean() ? [
                'en' => $depth . ' meters',
                'uk' => $depth . ' метрiв',
                'ru' => $depth . ' метров',
            ] : null,

        ];
    }
}
