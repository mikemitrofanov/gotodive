<?php

namespace App\Orchid\Layouts;

use App\Models\Language;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Layouts\Rows;

class ServiceCategoryUpdateLayout extends Rows
{

    protected function fields(): array
    {
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

            Input::make('category.order')
                ->title('Order')
                ->type('number')
                ->help('The order number when retrieving. If stays default it will take the largest number of existing.'),

        ];
    }
}
