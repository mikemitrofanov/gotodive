<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Http\Resources\ServiceCategoryResource;
use App\Models\ServiceCategory;

class ServiceCategoryController extends Controller
{
    /**
     *
     *
     * @OA\Get(
     *      path="/service-categories",
     *      operationId="Show Categories",
     *      tags={"Service Categories"},
     *      summary="Get list of categories",
     *      description="Returns list of projects",
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetCategoriesResponse"),
     *       ),
     *     )
     *
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */

    public function index()
    {
        return ServiceCategoryResource::collection(ServiceCategory::all());
    }

    public function withServices()
    {
        return ServiceCategoryResource::collection(ServiceCategory::with('services')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *      path="/service-categories",
     *      operationId="Create new Categoriy",
     *      tags={"Service Categories"},
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
     * @param \Illuminate\Http\Request $request
     * @return ServiceCategoryResource
     */
    public function store($language, CreateServiceCategoryRequest $request)
    {
        $category = ServiceCategory::create($request->validated());
        return new ServiceCategoryResource($category);
    }

    /**
     * @OA\Get(
     *      path="/service-categories/{serviceCategory:id}",
     *      operationId="Show Category",
     *      tags={"Service Categories"},
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
     * Display the specified resource.
     *
     *
     *
     * @param \App\Models\ServiceCategory $category
     */
    public function show($language, ServiceCategory $serviceCategory)
    {
        return new ServiceCategoryResource($serviceCategory);
    }

    /**
     *
     * @OA\Put(
     *      path="/service-categories/{serviceCategory:id}",
     *      operationId="Update Category",
     *      tags={"Service Categories"},
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
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ServiceCategory $category
     * @return ServiceCategoryResource
     */
    public function update($language, ServiceCategory $serviceCategory, UpdateServiceCategoryRequest $request)
    {
        $serviceCategory->update($request->validated());
        return new ServiceCategoryResource($serviceCategory);
    }

    /**
     *
     * @OA\Delete(
     *      path="/service-categories/{serviceCategory:id}",
     *      operationId="Logout User",
     *      tags={"Service Categories"},
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
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ServiceCategory $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(ServiceCategory $serviceCategory)
    {
        $serviceCategory->delete();
        return response()->noContent();
    }
}
