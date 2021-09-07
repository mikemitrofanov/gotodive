<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'title',
        'link',
        'order',
        'isSubcategory',
        'parentCategory',
    ];

    public function subcategory()
    {
        return $this->hasMany(Subcategory::class);
    }

    public function setOrderAttribute($value)
    {
        $value ?: Category::max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
