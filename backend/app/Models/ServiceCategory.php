<?php

namespace App\Models;

use App\Traits\HasOrder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    use HasFactory, HasOrder;

    public $timestamps = false;
    protected $fillable = [
        'title',
        'order',
    ];

    public function services()
    {
        return $this->hasMany(Service::class);
    }

//todo replace set order in to trait
    public function setOrderAttribute($value)
    {
        $value = $value ?: ServiceCategory::max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
