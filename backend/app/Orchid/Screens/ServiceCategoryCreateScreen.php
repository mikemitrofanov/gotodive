<?php

namespace App\Orchid\Screens;

use App\Http\Requests\CreateServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Models\ServiceCategory;
use App\Orchid\Layouts\ServiceCategoryUpdateLayout;
use App\Orchid\Layouts\ServiceListLayout;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;


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
    public function query(ServiceCategory $category): array
    {
        $this->category = $category;

        if (!$category->exists) {
            $this->name = 'Create Category';
        }

        return [
            'category' => $category,
            'items' => $category->services,
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
                ->title('Profile Information')
                ->description('Update your account\'s profile information and email address.')
                ->commands(
                    Button::make('Save')
                        ->type(Color::DEFAULT())
                        ->icon('check')
                        ->canSee($this->category->exists)
                        ->method('update')
                ),
            ServiceListLayout::class,
        ];
    }

    public function store(CreateServiceCategoryRequest $request)
    {
        app()->setLocale($request->category['language']);
        ServiceCategory::create($request->validated()['category']);
        return redirect()->route('platform.categories');
    }

    public function update(ServiceCategory $serviceCategory, UpdateServiceCategoryRequest $request,)
    {
        app()->setLocale($request->category['language']);
        $serviceCategory->update($request->validated()['category']);
        return redirect()->route('platform.categories');

    }
}
