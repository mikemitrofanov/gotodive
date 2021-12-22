<?php

namespace App\Orchid\Layouts\Subcategory;

use App\Models\Language;
use App\Models\ServiceCategory;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Layouts\Rows;

class SubcategoryUpdateLayout extends Rows
{

    protected function fields(): array
    {
        return [
            Input::make('subcategory.title')
                ->required()
                ->title('Title')
                ->placeholder('Title')
                ->help('Name of Category'),

            Relation::make('subcategory.language')
                ->title('Language code')
                ->value(app()->getLocale())
                ->required()
                ->help('Translation language, en is default.')
                ->fromModel(Language::class, 'language_code', 'language_code'),

//            Input::make('subcategory.order')
//                ->title('Order')
//                ->type('number')
//                ->help('The order number when retrieving. If stays default it will take the largest number of existing.'),

        ];
    }
}
