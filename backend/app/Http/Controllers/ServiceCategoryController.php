<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Http\Resources\ServiceCategoryResource;
use App\Models\ServiceCategory;

class ServiceCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return ServiceCategoryResource::collection(ServiceCategory::all());
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
        return new ServiceCategoryResource ($category);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ServiceCategory $category
     * @return ServiceCategoryResource
     */
    public function show(ServiceCategory $serviceCategory)
    {
        return new ServiceCategoryResource ($serviceCategory);
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
        return new ServiceCategoryResource ($serviceCategory);
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