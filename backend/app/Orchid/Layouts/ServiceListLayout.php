<?php

namespace App\Orchid\Layouts;

use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class ServiceListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'items';
    protected $title = 'Services list';

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
                ->render(function ($service) {
                    return Link::make($service->id)
                        ->route('platform.services.edit', $service);
                }),

            TD::make('order', 'Order')
                ->align('center')
                ->width('30px')
                ->render(function ($service) {
                    return Link::make($service->order)
                        ->route('platform.services.edit', $service);
                }),

            TD::make('title', 'RU Title')
                ->align('center')
                ->width('100px')
                ->render(function ($service) {
                    app()->setLocale('ru');
                    return Link::make($service->title)
                        ->route('platform.services.edit', [$service, 'ru']);

                }),

            TD::make('title', 'UKR Title')
                ->align('center')
                ->width('100px')
                ->render(function ($service) {
                    app()->setLocale('ukr');
                    return Link::make($service->title)
                        ->route('platform.services.edit', [$service, 'ukr']);

                }),

            TD::make('title', 'EN Title')
                ->align('center')
                ->width('100px')
                ->render(function ($service) {
                    app()->setLocale('en');
                    return Link::make($service->title)
                        ->route('platform.services.edit', $service->id);
                }),

            TD::make('delete', 'Delete')
                ->align('center')
                ->width('100px')
                ->render(function ($service) {
                    return Button::make(__('Delete'))
                        ->method('destroy')
                        ->icon('trash')
                        ->confirm(__('Are you sure you want to delete this category and all related services?'))
                        ->parameters([
                            'id' => $service->id,
                        ]);

                }),
        ];
    }
}
