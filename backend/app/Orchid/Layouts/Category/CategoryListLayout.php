<?php

namespace App\Orchid\Layouts\Category;

use App\Models\Language;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class CategoryListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'categories';
    protected $TDArray = [];

    /**
     * Get the table cells to be displayed.
     *
     * @return TD[]
     */
    protected function columns(): array
    {
        Language::all()->each(function ($language) {
            array_push($this->TDArray, TD::make('title', $language->language_code . ' Title')
                ->align('center')
                ->width('100px')
                ->render(function ($category) use ($language) {
                    app()->setLocale($language->language_code);
                    return Link::make($category->title)
                        ->route('platform.categories.edit', [$category, $language->language_code]);
                })
            );
        });
        return [

            TD::make('id', 'ID')
                ->align('center')
                ->width('30px')
                ->render(function ($category) {
                    return Link::make($category->id)
                        ->route('platform.categories.edit', $category);
                }),

            TD::make('order', 'Order')
                ->align('center')
                ->width('30px')
                ->render(function ($category) {
                    return Link::make($category->order)
                        ->route('platform.categories.edit', $category);
                }),

            ...$this->TDArray,

            TD::make('delete', 'Delete')
                ->align('center')
                ->width('100px')
                ->render(function ($category) {
                    app()->setLocale('en');
                    return Button::make('Delete')
                        ->method('destroy')
                        ->icon('trash')
                        ->confirm('Are you sure you want to delete this category and all related services?')
                        ->parameters([
                            'id' => $category->id,
                        ]);

                }),
        ];
    }

}
