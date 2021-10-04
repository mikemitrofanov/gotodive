<?php

namespace App\Orchid\Screens;

use App\Models\Service;
use App\Orchid\Layouts\ServiceUpdateLayout;
use Orchid\Screen\Screen;

class ServiceScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'ServiceScreen';
    private $service;

    /**
     * Query data.
     *
     * @return array
     */
    public function query(Service $service): array
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
        return [
//            ServiceUpdateLayout::class,
        ];
    }
}
