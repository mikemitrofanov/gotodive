<?php

namespace App\Models;

use App\Traits\HasOrder;
use App\Traits\HasTranslatedFields;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Service extends Model
{
    use HasFactory, HasOrder, HasTranslations, HasTranslatedFields;

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

    public $translatable = ['description', 'short_description', 'title', 'required_experience', 'course_certificate', 'duration',];

    public function serviceCategory()
    {
        return $this->belongsTo(ServiceCategory::class);
    }

}