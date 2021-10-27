<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddPhotoRequest;
use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Photo;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * @OA\Get(
     *      path="/{language}/service-categories/{serviceCategory}/services",
     *      operationId="Show Services",
     *      tags={"Services"},
     *      summary="Get list of Services",
     *      description="Returns list of projects",
     *       @OA\Parameter(
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
     *          name="serviceCategory",
     *          description="Category Id",
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
     *          @OA\JsonContent(ref="#/components/schemas/GetCategoryServicesResponse"),
     *       ),
     *       @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     *     )
     */

    public function index($language, ServiceCategory $serviceCategory)
    {
        return ServiceResource::collection($serviceCategory->services);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *      path="/{language}/service-categories/{serviceCategory}/services",
     *      operationId="Create new Service",
     *      tags={"Services"},
     *      summary="Create Service",
     *      description="Returns created user, some fields shold be unique",
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
     *       @OA\Parameter(
     *          name="serviceCategory",
     *          description="Category Id",
     *          required=true,
     *          in="path",
     *          example="1",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateServiceRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/ShowServiceResponse")
     *       ),
     *        @OA\Response(
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
    public function store($language, CreateServiceRequest $request, ServiceCategory $serviceCategory)
    {
        $service = $serviceCategory->services()->create($request->validated());
        return new ServiceResource($service);
    }

    /**
     * @OA\Get(
     *      path="/{language}/services/popular",
     *      operationId="Show Popular Services",
     *      tags={"Services"},
     *      summary="Show Popular Services",
     *      description="Returns list of Popular Services",
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
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetPopularServicesResponse"),
     *       ),
     *        @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     * )
     *
     */
    public function showPopular()
    {
        return ServiceResource::collection(Service::where('is_popular', true)->cursorPaginate(3));
    }

    /**
     * @OA\Get(
     *      path="/{language}/services/{service}",
     *      operationId="Show Service",
     *      tags={"Services"},
     *      summary="Get one category",
     *      description="Returns list of projects",
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
     *          name="service",
     *          description="Service Id",
     *          required=true,
     *          in="path",
     *          example="1",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/ShowServiceResponse"),
     *       ),
     *        @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     * )
     *
     */
    public function show($language, Service $service)
    {
        return new ServiceResource($service);
    }

    /**
     * @OA\Put(
     *      path="/{language}/services/{service}",
     *      operationId="Update service",
     *      tags={"Services"},
     *      summary="Create user",
     *      description="Returns created user, some fields shold be unique",
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
     *          name="service",
     *          description="Service Id",
     *          required=true,
     *          in="path",
     *          example="1",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateServiceRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/ShowServiceResponse")
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

    public function update($language, UpdateServiceRequest $request, Service $service)
    {
        $service->update($request->validated());
        return new ServiceResource($service);
    }

    /**
     * @OA\Delete(
     *      path="/{language}/services/{service}",
     *      operationId="Logout User",
     *      tags={"Services"},
     *      summary="Logout user",
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
     *          name="service",
     *          description="Service Id",
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

    public function destroy(Service $service)
    {
        $service->delete();
        return response()->noContent();
    }

    public function addPhotos($language, Service $service, AddPhotoRequest $request)
    {
        foreach ($request->photos as $photo) {

            (new Photo)->savePhoto($service, $photo);
        }
        return new ServiceResource(Service::where('id', $service->id)->with('photos')->first());

    }
}
