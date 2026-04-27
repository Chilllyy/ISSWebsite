<?php

namespace Database\Seeders;

use App\Models\Issdatamodel;
use Illuminate\Database\Seeder;

class IssdatamodelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Issdatamodel::factory(48)->create();
    }
}
