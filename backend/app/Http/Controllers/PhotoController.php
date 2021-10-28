<?php

namespace App\Http\Controllers;

use App\Http\Resources\PhotoResource;
use App\Models\Photo;

class PhotoController extends Controller
{

    public function index()
    {
        return PhotoResource::collection(Photo::all());
    }

    public function destroy($language, Photo $photo)
    {
        $photo->deleteFile();
        $photo->delete();
        return response()->noContent();
    }
}
