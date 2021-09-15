<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Http\Resources\ServiceCategoryResource;
use App\Models\ServiceCategory;
use App\Traits\HasTranslatedFields;

class ServiceCategoryController extends Controller
{
    use HasTranslatedFields;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index($language)
    {
        return ServiceCategoryResource::collection($this->collectionWithTranslation(ServiceCategory::all(), $language));
    }

    public function withServices($language)
    {

        return ServiceCategoryResource::collection((new ServiceCategory)->collectionWithTranslation(ServiceCategory::with('services')->get(), $language));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return ServiceCategoryResource
     */
    public function store(CreateServiceCategoryRequest $request)
    {
        $category = ServiceCategory::create($request->validated());
        return new ServiceCategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ServiceCategory $category
     */
    public function show($language, ServiceCategory $serviceCategory)
    {
        return new ServiceCategoryResource($serviceCategory->setLocale($language));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ServiceCategory $category
     * @return ServiceCategoryResource
     */
    public function update(UpdateServiceCategoryRequest $request, ServiceCategory $serviceCategory)
    {
        $serviceCategory->update($request->validated());
        return new ServiceCategoryResource($serviceCategory);
    }

    /**
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
