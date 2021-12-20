<?php

namespace App\Orchid\Layouts\Service;

use App\Models\Language;
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
    protected $target = 'services';
    protected $title = 'Services list';
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
                    ->render(function ($service) use ($language) {
                        app()->setLocale($language->language_code);
                        return Link::make($service->title)
                            ->route('platform.services.edit', [$service, $language->language_code]);
                    })
            );
        });
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

            ...$this->TDArray,

            TD::make('delete', 'Delete')
                ->align('center')
                ->width('100px')
                ->render(function ($service) {
                    return Button::make('Delete')
                        ->method('destroyService')
                        ->icon('trash')
                        ->confirm('Are you sure you want to delete this service?')
                        ->parameters([
                            'id' => $service->id,
                        ]);
                }),
        ];
    }
}
