<?php

namespace App\Orchid\Screens\Subcategory;

use App\Http\Requests\StoreSubcategoryRequest;
use App\Http\Requests\UpdateSubcategoryRequest;
use App\Models\ServiceCategory;
use App\Models\Subcategory;
use App\Orchid\Layouts\Subcategory\SubcategoryUpdateLayout;
use App\Orchid\Layouts\Service\ServiceListLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;
use App\Models\Service;


class SubcategoryCreateScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Edit Subcategories';

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
            Layout::block(SubcategoryUpdateLayout::class)
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

    public function store(ServiceCategory $serviceCategory, Request $request )
    {
        app()->setLocale($request['language']);
        $serviceCategory->subcategories()->create($request->subcategory);
        return redirect()->route('platform.categories');
    }

}
