<?php

namespace App\Orchid\Screens\Language;

use App\Models\Language;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Screen;
use Orchid\Screen\TD;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;

class LanguageScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'LanguageScreen';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {
        return [
            'languages' => Language::all()
        ];
    }

    /**
     * Button commands.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): array
    {
        return [
            ModalToggle::make('Add a Language')
                ->modal('Create a new Language')
                ->method('store')
                ->icon('full-screen'),
        ];
    }

    /**
     * Views.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): array
    {
        return [
            Layout::table('languages', [
                TD::make('languages_code', 'languages_code')
                    ->align('center')
                    ->width('100px')
                    ->render(function ($category) {
                        return Link::make($category->language_code)
                            ->route('platform.categories');
                    })
            ]),
            Layout::modal('Create a new Language', [
                Layout::rows([Input::make('language_code')
                    ->required()
                    ->maxlength(3)
                    ->title('Language Code')
                    ->placeholder('ru')
                ]),
            ]),
        ];
    }

    public function store(Request $request): void
    {
        if (Language::all()->contains('language_code', $request->language_code)) {
            Toast::error('This Language already exists.');
        } else {
            Language::create(['language_code' => $request->language_code]);
            Toast::success('Perfecto!!!');
        }
    }
}
