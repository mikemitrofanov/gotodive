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
        'certification_requirements',
        'min_logged_dives',
        'max_end',
    ];

    public $translatable = [
        'description',
        'short_description',
        'title',
        'required_experience',
        'course_certificate',
        'duration',
        'certification_requirements',
        'max_end',
    ];

    public function serviceCategory()
    {
        return $this->belongsTo(ServiceCategory::class);
    }

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    /**
     * Scope a query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($query, array $filters)
    {
        return $query->when(
            $filters['search'] ?? false,
            fn ($query, $search) =>
            //case insensitive search in JSON columns
            $query->whereRaw('LOWER(title->"$.' . $filters['language'] . '") LIKE ?', mb_strtolower('%' . $search . '%'))
                ->orWhereRaw('LOWER(description->"$.' . $filters['language'] . '") LIKE ?', mb_strtolower('%' . $search . '%'))
        );
    }
}
