<?php

namespace App\Orchid\Layouts\Photo;

use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class PhotoListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    public $target = 'photoList';
    //protected $TDArray = [];

    /**
     * Get the table cells to be displayed.
     *
     * @return TD[]
     */
    public function columns(): array
    {
        return [

            TD::make('id', 'ID')
                ->sort()
                ->align('center')
                ->width('30px'),

            TD::make('photo', 'Photo')
                ->align('center')
                ->width('20px')
                ->render(function ($photo) {
                    $image_url = asset("storage/" . $photo->optimized_url);
                    return "<img src='{$image_url}' alt='image {$photo->id}' width='200'>";
                }),

            TD::make('service_id', 'Service ID')
                ->sort()
                ->filter(TD::FILTER_TEXT)
                ->align('center')
                ->width('30px')
                ->render(function ($photo) {
                    return Link::make($photo->service_id)->route('platform.services.edit', $photo->service_id);
                }),

            TD::make('created_at', 'Created')
                ->sort()
                ->align('center')
                ->width('30px')
                ->render(function ($photo) {
                    return $photo->created_at->toDateTimeString();
                }),

            TD::make('delete', 'Delete')
                ->align('center')
                ->width('100px')
                ->render(function ($photo) {
                    return Button::make('Delete')
                        ->method('destroy')
                        ->icon('trash')
                        ->confirm('Are you sure you want to delete this photo?')
                        ->parameters([
                            'id' => $photo->id,
                        ]);
                }),
        ];
    }
}
