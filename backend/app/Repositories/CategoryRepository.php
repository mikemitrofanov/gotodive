<?php

namespace App\Repositories;

use \App\Repositories\Interfaces\CategoryRepositoryInterface;
use \App\Models\ServiceCategory;
use \App\Http\Resources\ServiceCategoryResource;

class CategoryRepository implements CategoryRepositoryInterface{

    public function allCategoriesWithSubcategories()
    {
        $categories = ServiceCategory::where('parent_category_id',null)->with('services')->get();
        return ServiceCategoryResource::collection($categories);
    }
}
