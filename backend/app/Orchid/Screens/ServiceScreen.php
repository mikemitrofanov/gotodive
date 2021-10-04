<?php

namespace App\Orchid\Screens;

use App\Models\Service;
use Orchid\Screen\Screen;

class ServiceScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Edit Service';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {

        return [];
    }

    /**
     * Button commands.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): array
    {
        return [];
    }

    /**
     * Views.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): array
    {
        return [];
    }
}
