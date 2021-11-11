<?php

namespace App\Http\Controllers;

use App\Http\Resources\PhotoResource;
use App\Models\Photo;

class PhotoController extends Controller
{

    /**
     * @OA\Get(
     *      path="/photos/",
     *      operationId="Show all Photos",
     *      tags={"Photos"},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetPhotosResponse"),
     *       ),
     * )
     */
    public function index()
    {
        return PhotoResource::collection(Photo::all());
    }

    /**
     * @OA\Delete(
     *      path="/{language}/photos/{photo}",
     *      operationId="Delete Photo",
     *      tags={"Photos"},
     *      summary="Delete photo",
     *      description="Returns nothing",
     *      security={{"bearerAuth":{}}},
     *      @OA\Parameter(
     *          name="language",
     *          description="Language code ",
     *          required=true,
     *          in="path",
     *          example="en",
     *          @OA\Schema(
     *              type="string"
     *          )
     *      ),
     *     @OA\Parameter(
     *          name="Photo",
     *          description="Photo Id",
     *          required=true,
     *          in="path",
     *          example="1",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *       @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *        @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
     */
    public function destroy($language, Photo $photo)
    {
        $photo->deleteFile();
        $photo->delete();
        return response()->noContent();
    }
}
