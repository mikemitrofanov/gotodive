<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * @OA\Get(
     *      path="/service-categories/{serviceServices:id}/services",
     *      operationId="Show Services",
     *      tags={"Services"},
     *      summary="Get list of Services",
     *      description="Returns list of projects",
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetServicesResponse"),
     *       ),
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
     *      path="/service-categories/{serviceCategory:id}/services",
     *      operationId="Create new Service",
     *      tags={"Services"},
     *      summary="Create Service",
     *      description="Returns created user, some fields shold be unique",
     *      security={{"bearerAuth":{}}},
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateServicesRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateServicesResponse")
     *       ),
     * )
     */
    public function store($language, CreateServiceRequest $request, ServiceCategory $serviceCategory)
    {
        $service = $serviceCategory->services()->create($request->validated());
        return new ServiceResource($service);
    }
    /**
     * @OA\Get(
     *      path="/services/popular",
     *      operationId="Show Popular Services",
     *      tags={"Services"},
     *      summary="Get one category",
     *      description="Returns list of projects",
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateServicesResponse"),
     *       ),
     * )
     *
     */
    public function showPopular()
    {
        return ServiceResource::collection(Service::where('is_popular', true)->cursorPaginate(3));
    }
    /**
     * @OA\Get(
     *      path="/services/{service:id}",
     *      operationId="Show Services",
     *      tags={"Services"},
     *      summary="Get one category",
     *      description="Returns list of projects",
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateServicesResponse"),
     *       ),
     * )
     *
     */
    public function show($language, Service $service)
    {
        return new ServiceResource($service);
    }

    /**
     * @OA\Post(
     *      path="/services/{service:id}",
     *      operationId="Update service",
     *      tags={"Services"},
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

    public function update($language, UpdateServiceRequest $request, Service $service)
    {
        $service->update($request->validated());
        return new ServiceResource($service);
    }

    /**
     * @OA\Delete(
     *      path="/services/{service:id}",
     *      operationId="Logout User",
     *      tags={"Services"},
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

    public function destroy(Service $service)
    {
        $service->delete();
        return response()->noContent();
    }
}
