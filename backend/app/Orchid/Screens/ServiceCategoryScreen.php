<?php

namespace App\Orchid\Screens;

use App\Models\ServiceCategory;
use App\Orchid\Layouts\CategoryListLayout;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Screen;

class ServiceCategoryScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'ServiceCategoryScreen';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {
        return [
            'categories' => ServiceCategory::all()
        ];
    }

    /**
     * Button commands.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): array
    {
        return [
            Link::make(__('Create new category'))
                ->route('platform.categories.create')
                ->icon('paper-plane')
        ];
    }

    /**
     * Views.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): array
    {
        return [
            CategoryListLayout::class,
        ];
    }

    public function destroy(ServiceCategory $serviceCategory)
    {
        $serviceCategory->delete();
        return redirect()->route('platform.categories');

    }

}
