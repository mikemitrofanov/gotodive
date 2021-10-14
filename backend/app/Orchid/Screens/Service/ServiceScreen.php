<?php

namespace App\Orchid\Screens\Service;

use App\Models\Service;
use App\Orchid\Layouts\Service\ServiceUpdateLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;

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
    public function query(Service $service, $language): array
    {
        if ($language) {
            app()->setLocale($language);
        }
        return [
            'service' => $service,
        ];
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
                ->description('Update Service.')
                ->commands(
                    Button::make('Update')
                        ->type(Color::DEFAULT())
                        ->icon('check')
                        ->method('update')
                ),
        ];
    }

    public function update(Service $service, Request $request,)
    {
        app()->setLocale($request->service['language']);
        $service->update($request->service);
        return redirect()->route('platform.services.edit', [$service, $request->service['language']]);
    }
}
