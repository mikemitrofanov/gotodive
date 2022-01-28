<?php

namespace App\Repositories\Interfaces;

interface CategoryRepositoryInterface
{
    public function allCategoriesWithSubcategories();

    public function allSubcategoriesOfCategory($id);

}