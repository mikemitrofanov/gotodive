<?php

namespace App\Orchid\Screens\Contact;

use App\Models\Contact;
use App\Orchid\Layouts\Contact\ContactListLayout;
use Orchid\Screen\Screen;

class ContactScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Contacts List';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {
        return [
            'contacts' => Contact::all(),
        ];
    }

    /**
     * Button commands.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): array
    {
        return [];
    }

    /**
     * Views.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): array
    {
        return [
            ContactListLayout::class,
        ];
    }

    public function destroy(Contact $service)
    {
        $service->delete();
        return redirect()->route('platform.contacts');
    }
}
