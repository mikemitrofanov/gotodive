<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'link',
        'order',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function setOrderAttribute($value)
    {
        $value ?: Category::max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
