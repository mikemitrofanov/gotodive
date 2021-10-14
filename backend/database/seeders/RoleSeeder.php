<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Orchid\Platform\Models\Role;
use Orchid\Support\Facades\Dashboard;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'Admin',
            'slug' => 'admin',
            'permissions' => Dashboard::getAllowAllPermission(),
        ]);
        Role::create([
            'name' => 'Moderator',
            'slug' => 'moderator',
            'permissions' => [
                "platform.index" => true,
            ],
        ]);
    }
}
