<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'link',
        'order',
        'description',
        'duration',
        'price',
        'is_popular',
    ];

    public function serviceCategory()
    {
        return $this->belongsTo(ServiceCategory::class);
    }

//todo replace set order in to trait

    public function setOrderAttribute($value)
    {
        $value = $value ?: Service::max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
