<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use App\Models\ServiceCategory;

class ServiceController extends Controller
{

    public function index(ServiceCategory $serviceCategory)
    {
        return ServiceResource::collection($serviceCategory->services()->cursorPaginate(10));
    }

    public function store(CreateServiceRequest $request, ServiceCategory $serviceCategory)
    {
        $service = $serviceCategory->services()->create($request->validated());
        return new ServiceResource ($service);
    }

    public function show(Service $service)
    {
        return new ServiceResource ($service);
    }

    public function update(UpdateServiceRequest $request, Service $service)
    {
        $service->update($request->validated());
        return new ServiceResource ($service);
    }


    public function destroy(Service $service)
    {
        $service->delete();
        return response()->noContent();
    }

    /**
     * @OA\Get(
     *      path="/service-categories/{serviceCategory:id}/services",
     *      operationId="Show Categories",
     *      tags={"Service"},
     *      summary="Get list of categories",
     *      description="Returns list of projects",
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetCategoriesResponse"),
     *       ),
     *     )
     */



    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *      path="/service-categories/{serviceCategory:id}/services",
     *      operationId="Create new Categoriy",
     *      tags={"Service"},
     *      summary="Create Categoriy",
     *      description="Returns created user, some fields shold be unique",
     *      security={{"bearerAuth":{}}},
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryResponse")
     *       ),
     * )
     */


    /**
     * @OA\Get(
     *      path="/services/{service:id}",
     *      operationId="Show Category",
     *      tags={"Service"},
     *      summary="Get one category",
     *      description="Returns list of projects",
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetUserResponse"),
     *       ),
     * )
     *
     */


    /**
     * @OA\Post(
     *      path="/services/{service:id}",
     *      operationId="Update service",
     *      tags={"Service"},
     *      summary="Create user",
     *      description="Returns created user, some fields shold be unique",
     *      security={{"bearerAuth":{}}},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/RegisterRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/RegisterResponse")
     *       ),
     * )
     */


    /**
     * @OA\Delete(
     *      path="/services/{service:id}",
     *      operationId="Logout User",
     *      tags={"Service"},
     *      summary="Logout user",
     *      description="Returns nothing",
     *      security={{"bearerAuth":{}}},
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/LogoutResponse")
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     * )
     */

}
