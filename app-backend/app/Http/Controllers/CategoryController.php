<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'categories' => Category::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|unique:categories',
            'link' => 'required|string|unique:categories',
            'isSubcategory' => 'integer',
            'parentCategory' => 'integer|nullable',
        ]);

        $lastCategoryByOrder = Category::max('order');

        $category = Category::create([
            'title' => $validatedData['title'],
            'link' => $validatedData['link'],
            'isSubcategory' => $validatedData['isSubcategory'],
            'parentCategory' => $validatedData['parentCategory'],
            'order' => $lastCategoryByOrder + 1,
        ]);

        $category->save();

        return response()->json([
            'category' => $category,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json([
            'category' => Category::find($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $id = $request->route('id');
        $category = Category::find($id);

        $validatedData = $request->validate([
            'title' => ['required', 'string', Rule::unique('categories')->ignore($id, 'id')],
            'link' => ['required', 'string', Rule::unique('categories')->ignore($id, 'id')],
            'isSubcategory' => 'integer',
            'parentCategory' => 'integer|nullable',
        ]);

        $category->title = $validatedData['title'];
        $category->link = $validatedData['link'];
        $category->isSubcategory = $validatedData['isSubcategory'];
        $category->parentCategory = $validatedData['parentCategory'];

        $category->save();

        return response()->json([
            'category' => $category,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        if ($category->delete()) {
            return response(null, 204);
        }
    }
}
