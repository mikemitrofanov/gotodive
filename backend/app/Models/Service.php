<?php

namespace App\Models;

use App\Traits\HasOrder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Service extends Model
{
    use HasFactory, HasOrder, HasTranslations;

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

    public $translatable = [
        'description',
        'short_description',
        'title',
        'required_experience',
        'course_certificate',
        'duration',
    ];

    public function serviceCategory()
    {
        return $this->belongsTo(ServiceCategory::class);
    }

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }
}
