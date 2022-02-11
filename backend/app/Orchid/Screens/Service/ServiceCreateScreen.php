<?php

namespace App\Orchid\Screens\Service;

use App\Models\ServiceCategory;
use App\Orchid\Layouts\Service\ServiceUpdateLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;

class ServiceCreateScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Create Service';

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
        return [
            Layout::block(ServiceUpdateLayout::class)
                ->title('Service Information')
                ->description('Create a new Service.')
                ->commands(
                    Button::make('Create')
                        ->type(Color::DEFAULT())
                        ->icon('check')
                        ->method('store')
                ),
        ];
    }

    public function store(ServiceCategory $serviceCategory, Request $request)
    {
        app()->setLocale($request->service['language']);
        $service = $serviceCategory->services()->create($request->service);
        return redirect()->route('platform.services.edit', [$service, $request->service['language']]);

    }
}
