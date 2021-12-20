<?php

namespace App\Orchid\Layouts\Service;

use App\Models\Language;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Layouts\Rows;

class ServiceUpdateLayout extends Rows
{

    protected function fields(): array
    {
        return [
            Input::make('service.title')
                ->required()
                ->title('Title')
                ->placeholder('Title')
                ->help('Name of Category'),

            Relation::make('service.language')
                ->title('Language code')
                ->value(app()->getLocale())
                ->required()
                ->help('Translation language, en is default.')
                ->fromModel(Language::class, 'language_code', 'language_code'),

            Input::make('service.order')
                ->title('Order')
                ->type('number')
                ->help('The order number when retrieving. If stays default it will take the largest number of existing.'),

            TextArea::make('service.description')
                ->required()
                ->title('description')
                ->rows(5),

            Input::make('service.short_description')
                ->required()
                ->title('short_description')
                ->type('string'),

            Input::make('service.duration')
                ->required()
                ->title('duration')
                ->type('string'),

            Input::make('service.min_age')
                ->required()
                ->title('min_age')
                ->type('string'),

            Input::make('service.required_experience')
                ->title('required_experience')
                ->type('string'),

            Input::make('service.max_depth')
                ->title('max_depth')
                ->type('string'),

            Input::make('service.course_certificate')
                ->title('course_certificate')
                ->type('string'),

            Input::make('service.price')
                ->required()
                ->title('price')
                ->type('number'),

            CheckBox::make('service.is_popular')
                ->title('is_popular')
                ->sendTrueOrFalse(),

            Input::make('service.certification_requirements')
                ->title('certification_requirements')
                ->type('string'),

            Input::make('service.min_logged_dives')
                ->title('min_logged_dives')
                ->type('number'),

            Input::make('service.max_end')
                ->title('max_end')
                ->type('string')
                ->help('Max equivalent narcotic depth'),
        ];
    }
}
