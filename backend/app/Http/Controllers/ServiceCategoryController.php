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
     *      path="/{language}/service-categories",
     *      operationId="Show Categories",
     *      tags={"Service Categories"},
     *      summary="Get list of categories",
     *      description="Returns list of projects",
     *      @OA\Parameter(
     *          name="language",
     *          description="Language code ",
     *          required=true,
     *          in="path",
     *          example="en",
     *          @OA\Schema(
     *              type="string",
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetCategoriesResponse"),
     *       ),
     *       @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
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

    /**
     *
     * @OA\Get(
     *      path="/{language}/service-categories/services",
     *      operationId="Show Services with categories",
     *      tags={"Service Categories"},
     *      summary="Show Categoriy with serwices",
     *      description="Returns array categories with serwices",
     *         @OA\Parameter(
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
     *          @OA\JsonContent(ref="#/components/schemas/CategoryWithServicesResponse")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     * )
     */

    public function withServices()
    {
        return ServiceCategoryResource::collection(ServiceCategory::with('services')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OA\Post(
     *      path="/{language}/service-categories",
     *      operationId="Create new Categoriy",
     *      tags={"Service Categories"},
     *      summary="Create Categoriy",
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
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryResponse")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
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
     *      path="/{language}/service-categories/{serviceCategory}",
     *      operationId="Show Category",
     *      tags={"Service Categories"},
     *      summary="Get one category",
     *      description="Returns specific category",
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
     *      @OA\Parameter(
     *          name="serviceCategory",
     *          description="Category Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryResponse"),
     *       ),
     * )
     *
     * Display the specified category.
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
     *      path="/{language}/service-categories/{serviceCategory}",
     *      operationId="Update Category",
     *      tags={"Service Categories"},
     *      summary="Update Category",
     *      description="Returns updated category.",
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
     *          name="serviceCategory",
     *          description="Category Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/CreateCategoryResponse")
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Language code is not supported.",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
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
     *      path="/{language}/service-categories/{serviceCategory}",
     *      operationId="Delete Category",
     *      tags={"Service Categories"},
     *      summary="Delete Category",
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
     *       @OA\Parameter(
     *          name="serviceCategory",
     *          description="Category Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *        @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
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
