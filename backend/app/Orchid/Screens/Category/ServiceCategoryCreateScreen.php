<?php

namespace App\Orchid\Screens\Category;

use App\Http\Requests\CreateServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Models\ServiceCategory;
use App\Orchid\Layouts\Category\ServiceCategoryUpdateLayout;
use App\Orchid\Layouts\Subcategory\SubcategoryListLayout;
use App\Orchid\Layouts\Service\ServiceListLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;
use App\Models\Service;


class ServiceCategoryCreateScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Edit Category';
    private $category;

    /**
     * Query data.
     *
     * @return array
     */
    public function query(ServiceCategory $category, $language): array
    {
        if ($language) {
            app()->setLocale($language);
        }

        $this->category = $category;
        if (!$category->exists) {
            $this->name = 'Create Category';
        }

        return [
            'category' => $category,
            'services' => $category->services,
            'subcategories'=>$category->subcategories,
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
            Button::make('Store')
                ->icon('paper-plane')
                ->canSee(!$this->category->exists)
                ->method('store'),

            Link::make('Add new service')
                ->icon('paper-plane')
                ->canSee($this->category->exists)
                ->when($this->category->exists, function ($item) {
                    $item->route('platform.services.create', [$this->category->id, 'subcategory']);
                }),
            Link::make('Add new subcategory')
                ->icon('paper-plane')
                ->canSee($this->category->exists)
                ->when($this->category->exists, function ($item) {
                    $item->route('platform.subcategories.create', $this->category->id);
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
            Layout::block(ServiceCategoryUpdateLayout::class)
                ->title('Category Information')
                ->description('Update category or create a new one.')
                ->commands(
                    Button::make('Update')
                        ->type(Color::DEFAULT())
                        ->icon('check')
                        ->canSee($this->category->exists)
                        ->method('update')
                ),
            SubcategoryListLayout::class,
            ServiceListLayout::class,
        ];
    }

    public function store(Request $request)
    {
        app()->setLocale($request->category['language']);
        ServiceCategory::create($request['category']);
        return redirect()->route('platform.categories');
    }

    public function update(ServiceCategory $serviceCategory, Request $request,)
    {
        app()->setLocale($request->category['language']);
        $serviceCategory->update($request['category']);
        return redirect()->route('platform.categories');
    }

    public function destroyService(Service $service)
    {
        $service->delete();
        return redirect()->route('platform.categories.edit', $service->service_category_id);
    }
}
