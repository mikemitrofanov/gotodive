<?php

namespace App\Orchid\Screens\Subcategory;

use App\Models\ServiceCategory;
use App\Models\Subcategory;
use App\Orchid\Layouts\Service\ServiceListLayout;
use App\Orchid\Layouts\Subcategory\SubcategoryListLayout;
use App\Orchid\Layouts\Subcategory\SubcategoryUpdateLayout;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Screen;
use Orchid\Support\Color;

class SubcategoryScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Service Category List';
    public $subcategory;

    /**
     * Query data.
     *
     * @return array
     */
    public function query(Subcategory $subcategory, $language): array
    {
        if ($language) {
            app()->setLocale($language);
        }
        $this->subcategory = $subcategory;

        return [
            'subcategory' => $subcategory,
            'services' => $subcategory->services,
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
            Link::make('Add new service')
                ->icon('paper-plane')
                ->canSee($this->subcategory->exists)
                ->when($this->subcategory->exists, function ($item) {
                    $item->route('platform.services.create',[$this->subcategory->serviceCategory->id, $this->subcategory->id]);
                }),
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
            Layout::block(SubcategoryUpdateLayout::class)
                ->title('Category Information')
                ->description('Update category or create a new one.')
                ->commands(
                    Button::make('Update')
                        ->type(Color::DEFAULT())
                        ->icon('check')
                        ->canSee($this->subcategory->exists)
                        ->method('update')
                ),
            ServiceListLayout::class,
        ];
    }

    public function destroy(ServiceCategory $serviceCategory, $language)
    {
        $serviceCategory->delete();
        return redirect()->route('platform.categories');

    }

}
