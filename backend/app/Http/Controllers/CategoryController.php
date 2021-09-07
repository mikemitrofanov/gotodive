<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCatagoryRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\CatagoryResource;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CatagoryResource::collection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return CatagoryResource
     */
    public function store(CreateCatagoryRequest $request)
    {
        $category = Category::create($request->validated());
        return new CatagoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Category $category
     * @return CatagoryResource
     */
    public function show(Category $category)
    {
        return new CatagoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Category $category
     * @return CatagoryResource
     */
    public function update(UpdateUserRequest $request, Category $category)
    {
        $category->update($request->validated());
        return new CatagoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->noContent();
    }
}
