<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\StoreSubcategoryRequest;
use App\Http\Requests\UpdateSubcategoryRequest;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\SubcategoryResource;
use App\Models\ServiceCategory;
use App\Models\Subcategory;

class SubcategoryController extends Controller
{

    public function index()
    {
        return SubcategoryResource::collection(Subcategory::with('services')->get());

    }

    public function store($language, StoreSubcategoryRequest $request, ServiceCategory $serviceCategory)
    {
        $subcategory = $serviceCategory->subcategories()->create($request->validated());
        return new SubcategoryResource($subcategory);
    }

    public function show(Subcategory $subcategory)
    {
        return new SubcategoryResource($subcategory);
    }


    public function update($language, Subcategory $subcategory, UpdateSubcategoryRequest $request)
    {
        $subcategory->update($request->validated());
        return new SubcategoryResource($subcategory);
    }

    public function destroy(Subcategory $subcategory)
    {
        $subcategory->delete();
        return response()->noContent();
    }
}
