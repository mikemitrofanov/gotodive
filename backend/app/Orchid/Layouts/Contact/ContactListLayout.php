<?php

namespace App\Orchid\Layouts\Contact;

use Orchid\Screen\Actions\Button;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class ContactListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'contacts';

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
                ->width('30px'),

            TD::make('name', 'Name')
                ->align('center')
                ->width('30px'),

            TD::make('email', 'Email')
                ->align('center')
                ->width('30px'),

            TD::make('phone', 'Phone')
                ->align('center')
                ->width('30px'),

            TD::make('message', 'Message')
                ->align('center')
                ->width('30px'),

            TD::make('delete', 'Delete')
                ->align('center')
                ->width('100px')
                ->render(function ($contact) {
                    return Button::make('Delete')
                        ->method('destroy')
                        ->icon('trash')
                        ->confirm('Are you sure you want to delete this contact?')
                        ->parameters([
                            'id' => $contact->id,
                        ]);
                }),

        ];
    }
}
