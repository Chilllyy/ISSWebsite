<?php

namespace Database\Factories;

use App\Models\issdatamodel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<issdatamodel>
 */
class IssdatamodelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "timestamp" => fake()->dateTimeBetween("-1 day", "now"),
            "value" => fake()->numberBetween(0, 100)
        ];
    }
}
