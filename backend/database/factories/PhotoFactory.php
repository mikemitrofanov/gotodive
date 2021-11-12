<?php

namespace Database\Factories;

use App\Models\Photo;
use Illuminate\Database\Eloquent\Factories\Factory;

class PhotoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Photo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'url' => 'images/' . $this->faker->image('storage/app/public/images', 800, 800, null, false, ),
            'optimized_url' => 'optimized/' . $this->faker->image('storage/app/public/optimized', 300, 300, 'cat', false, ),
        ];
    }
}
