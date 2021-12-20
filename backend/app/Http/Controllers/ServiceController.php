<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddPhotoRequest;
use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\SearchServicesRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Photo;
use App\Models\Service;
use App\Models\ServiceCategory;

class ServiceController extends Controller
{
    /**
     * @OA\Get(
     *      path="/{language}/service-categories/{serviceCategory}/services",
     *      operationId="Show Services",
     *      tags={"Services"},
     *      summary="Get services",
     *      description="Returns array of services related to certain category",
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
     *      summary="Create service",
     *      description="Returns created service",
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
     *      summary="Show popular services",
     *      description="Returns array of popular services",
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
        return ServiceResource::collection(Service::where('is_popular', true)->with('photos')->cursorPaginate(3));
    }

    /**
     * @OA\Get(
     *      path="/{language}/services/{service}",
     *      operationId="Show Service",
     *      tags={"Services"},
     *      summary="Get service",
     *      description="Returns specific service",
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
        return new ServiceResource(Service::where('id', $service->id)
            ->with(['photos' => function ($query) {
                $query->where('is_shown', true);
            }])
            ->first());
    }

    /**
     * @OA\Put(
     *      path="/{language}/services/{service}",
     *      operationId="Update service",
     *      tags={"Services"},
     *      summary="Update service",
     *      description="Returns updated service",
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
     *      operationId="Delete Service",
     *      tags={"Services"},
     *      summary="Delete service",
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
     *          response=204,
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

    public function destroy($language, Service $service)
    {
        $service->delete();
        return response()->noContent();
    }

    /**
     * @OA\Post(
     *      path="/{language}/services/{service}/add-photo",
     *      operationId="Add photos to service",
     *      tags={"Photos"},
     *      summary="Add photo",
     *      description="Returns specific service with it's photos",
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
     *       @OA\MediaType(
     *             mediaType="multipart/form-data",
     *          @OA\Schema (ref="#/components/schemas/AddPhotoRequest")
     *          )
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
     *      ),
     * )
     */

    public function addPhotos($language, Service $service, AddPhotoRequest $request)
    {
        foreach ($request->photos as $photo) {

            (new Photo)->savePhoto($service, $photo);
        }
        return new ServiceResource(Service::where('id', $service->id)->with('photos')->first());
    }

    /**
     * @OA\Get(
     *      path="/{language}/search",
     *      operationId="Search Services",
     *      tags={"Services"},
     *      summary="Search Services",
     *      description="Returns array of matching Services",
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
     *          @OA\JsonContent(ref="#/components/schemas/SearchServicesResponse"),
     *       ),
     *        @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     * )
     *
     */

    public function search($language, SearchServicesRequest $request)
    {
        $search = $request->validated();
        $search['language'] = $language;
        $services = Service::filter($search)->get();

        return ServiceResource::collection($services);
    }
}
