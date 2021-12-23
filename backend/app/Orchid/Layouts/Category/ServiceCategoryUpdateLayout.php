<?php

namespace App\Orchid\Layouts\Category;

use App\Models\Language;
use App\Models\ServiceCategory;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Layouts\Rows;

class ServiceCategoryUpdateLayout extends Rows
{

    protected $target = 'category';
    protected $categories;

    protected function fields(): array
    {
        $this->categories = ServiceCategory::where('parent_category_id', null)->get();
        $arr = [];
        foreach ($this->categories as $category) {
            if ($this->query->get('category.id') !== $category->id) {
                $arr[$category->id] = $category['title'];
            }
        }
        $this->categories = $arr;

        return [
            Input::make('category.title')
                ->required()
                ->title('Title')
                ->placeholder('Title')
                ->help('Name of Category'),

            Relation::make('category.language')
                ->title('Language code')
                ->value(app()->getLocale())
                ->required()
                ->help('Translation language, en is default.')
                ->fromModel(Language::class, 'language_code', 'language_code'),

            Select::make('category.parent_category_id')
                ->title('Parent category')
                ->empty('Leave as category')
                ->options($arr)->canSee(true),

            Input::make('category.order')
                ->title('Order')
                ->type('number')
                ->help('The order number when retrieving. If stays default it will take the largest number of existing.'),

        ];
    }
}
