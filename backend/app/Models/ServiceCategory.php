<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ServiceCategory extends Model
{
    use HasFactory;

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
        $value = $value ?: DB::table('service_categories')->max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
