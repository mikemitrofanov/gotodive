<?php

namespace App\Orchid\Screens\Service;

use App\Http\Requests\AddPhotoRequest;
use App\Models\Photo;
use App\Models\Service;
use App\Orchid\Layouts\Service\ServicePhotosLayout;
use App\Orchid\Layouts\Service\ServiceUpdateLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;

class ServiceScreen extends Screen
{
    /**
     * Display header name.
     *
     * @var string
     */
    public $name = 'Edit Service';

    /**
     * Query data.
     *
     * @return array
     */
    public function query(Service $service, $language): array
    {
        if ($language) {
            app()->setLocale($language);
        }
        return [
            'service' => $service,
            'photoList' => $service->photos()->filters()->get(),
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
                ->method('uploadPhoto')
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
                ]),
            ]),

            Layout::tabs([
                'Service Information' => [
                    Layout::block(ServiceUpdateLayout::class)
                        ->title('Service Information')
                        ->description('Update Service.')
                        ->commands(
                            Button::make('Update')
                                ->type(Color::DEFAULT())
                                ->icon('check')
                                ->method('update')
                        ),
                ],

                'Service Photos' => [
                    Layout::block(ServicePhotosLayout::class)
                        ->title('Service Photos')
                        ->description('Update Service photos. Select photos to be displayed on a service page (max number - 4).')
                        ->commands(
                            Button::make('Update')
                                ->type(Color::DEFAULT())
                                ->icon('check')
                                ->method('updateShownPhotos')
                        ),

                ],
            ]),
        ];
    }

    public function update(Service $service, Request $request,)
    {
        app()->setLocale($request->service['language']);
        $service->update($request->service);

        if ($request->service['background_photo'] != null) {
            (new Photo)->saveBackgroundPhoto($service, $request->service['background_photo']);
        }

        return redirect()->route('platform.services.edit', [$service, $request->service['language']]);
    }

    public function updateShownPhotos(Service $service, Request $request)
    {
        $shown_photos = $request->shown_photos;

        if (is_null($shown_photos)) $shown_photos = [];

        if (count($shown_photos) > 4) {
            Toast::warning('Max number of selected photos must be less than 5');
            return redirect()->route('platform.services.edit', $service->id);
        }

        foreach ($service->photos as $photo) {
            $photo->is_shown = in_array($photo->id, $shown_photos) ? 1 : 0;
            $photo->save();
        }
    }

    public function uploadPhoto(Service $service, AddPhotoRequest $request)
    {
        $identical_filenames = [];

        foreach ($request->photos as $photo) {

            if (!(new Photo)->savePhoto($service, $photo)) {
                array_push($identical_filenames, $photo->getClientOriginalName());
            }
        }

        if (count($identical_filenames)) {
            Toast::warning('File(s) ' . implode(', ', $identical_filenames) . ' already exist in database');
        } else {
            Toast::info('Photos successfully uploaded');
        }

        return redirect()->route('platform.services.edit', $service->id);
    }

    public function destroy(Photo $photo)
    {
        $photo->deleteFile();
        $photo->delete();
        Toast::info('Photo successfully removed');
        return redirect()->route('platform.services.edit', $photo->service_id);
    }
}
