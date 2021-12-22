<?php

namespace App\Orchid\Layouts\Subcategory;

use App\Models\Language;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class SubcategoryListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'subcategories';
    protected $title = 'Subcategories list';
    protected $TDArray = [];

    /**
     * Get the table cells to be displayed.
     *
     * @return TD[]
     */
    protected function columns(): array
    {
        Language::all()->each(function ($language) {
            array_push(
                $this->TDArray,
                TD::make('title', $language->language_code . ' Title')
                    ->align('center')
                    ->width('100px')
                    ->render(function ($subcategory) use ($language) {
                        app()->setLocale($language->language_code);
                        return Link::make($subcategory->title)
                            ->route('platform.subcategories.edit', [$subcategory, $language->language_code]);
                    })
            );
        });
        return [
            TD::make('id', 'ID')
                ->align('center')
                ->width('30px')
                ->render(function ($subcategory) {
                    return Link::make($subcategory->id)
                        ->route('platform.subcategories.edit', $subcategory);
                }),

            TD::make('order', 'Order')
                ->align('center')
                ->width('30px')
                ->render(function ($subcategory) {
                    return Link::make($subcategory->order)
                        ->route('platform.subcategories.edit', $subcategory);
                }),

            ...$this->TDArray,

            TD::make('delete', 'Delete')
                ->align('center')
                ->width('100px')
                ->render(function ($subcategory) {
                    return Button::make('Delete')
                        ->method('destroyService')
                        ->icon('trash')
                        ->confirm('Are you sure you want to delete this service?')
                        ->parameters([
                            'id' => $subcategory->id,
                        ]);
                }),
        ];
    }

}
