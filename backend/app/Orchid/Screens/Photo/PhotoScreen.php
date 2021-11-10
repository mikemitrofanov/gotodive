<?php

namespace App\Orchid\Screens\Photo;

use App\Models\Photo;
use App\Models\Service;
use App\Orchid\Layouts\Photo\PhotoListLayout;
use Orchid\Screen\Screen;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Select;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;
use Illuminate\Http\Request;

class PhotoScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Manage Photos';

    /**
     * @var string
     */
    public $permission = 'platform.systems.users';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(): array
    {
        return [
            'photoList' => Photo::filters()->defaultSort('id')->paginate(5)
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
            ModalToggle::make('Upload photos')
                ->modal('Upload new photos')
                ->method('upload')
                ->icon('plus'),
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
            Layout::modal('Upload new photos', [
                Layout::rows([
                    Input::make('photos')
                        ->type('file')
                        ->required()
                        ->multiple()
                        ->title('Photo')
                        ->help('Supported image types: .jpeg/png/jpg/gif/svg/webp. Max filesize: 2MB'),

                    Select::make('service')
                        ->required()
                        ->title('Service')
                        ->fromModel(Service::class, 'title'),
                ]),
            ]),

            PhotoListLayout::class,
        ];
    }

    public function upload(Request $request)
    {
        $validated = $request->validate([
            'photos' => 'array|required',
            'photos.*' => 'image|distinct|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'service' => 'required'
        ]);

        $service = Service::where('id', $validated['service'])->first();
        $identical_filenames = [];

        foreach ($validated['photos'] as $photo) {

            if (!(new Photo)->savePhoto($service, $photo)) {
                array_push($identical_filenames, $photo->getClientOriginalName());
            }
        }

        if (count($identical_filenames)) {
            Toast::warning('File(s) ' . implode(', ', $identical_filenames) . ' already exist in database');
        } else {
            Toast::info('Photos successfully uploaded');
        }

        return redirect()->route('platform.photos');
    }

    public function destroy(Photo $photo)
    {
        $photo->deleteFile();
        $photo->delete();
        Toast::info('Photo successfully removed');
        return redirect()->route('platform.photos');
    }
}
