<?php

namespace App\Models;

use App\Traits\HasOrder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory, HasOrder;

    protected $fillable = [
        'short_description',
        'min_age',
        'required_experience',
        'max_depth',
        'course_certificate',
        'title',
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

}
