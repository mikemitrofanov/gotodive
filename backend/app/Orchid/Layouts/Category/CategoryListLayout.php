<?php

namespace App\Orchid\Layouts\Category;

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

    /**
     * Get the table cells to be displayed.
     *
     * @return TD[]
     */
    protected function columns(): array
    {
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

            TD::make('title', 'RU Title')
                ->align('center')
                ->width('100px')
                ->render(function ($category) {
                    app()->setLocale('ru');
                    return Link::make($category->title)
                        ->route('platform.categories.edit', [$category, 'ru']);

                }),

            TD::make('title', 'UKR Title')
                ->align('center')
                ->width('100px')
                ->render(function ($category) {
                    app()->setLocale('ukr');
                    return Link::make($category->title)
                        ->route('platform.categories.edit', [$category, 'ukr']);

                }),

            TD::make('title', 'EN Title')
                ->align('center')
                ->width('100px')
                ->render(function ($category) {
                    app()->setLocale('en');
                    return Link::make($category->title)
                        ->route('platform.categories.edit', $category);
                }),

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
