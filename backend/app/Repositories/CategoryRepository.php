<?php

namespace App\Repositories;

use App\Http\Resources\SubcategoryResource;
use \App\Repositories\Interfaces\CategoryRepositoryInterface;
use \App\Models\ServiceCategory;
use \App\Http\Resources\ServiceCategoryResource;

class CategoryRepository implements CategoryRepositoryInterface
{

    public function allCategoriesWithSubcategories()
    {
        $categories = ServiceCategory::where('parent_category_id', null)->with('services')->get();
        return ServiceCategoryResource::collection($categories);
    }

    public function allSubcategoriesOfCategory($id)
    {
        $subcategories = ServiceCategory::where('parent_category_id', $id)->with('services')->get();
        return SubcategoryResource::collection($subcategories);
    }
}
