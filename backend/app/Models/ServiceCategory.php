<?php

namespace App\Models;

use App\Traits\HasOrder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ServiceCategory extends Model
{
    use HasFactory, HasOrder, HasTranslations;

    protected $fillable = [
        'title',
        'order',
    ];
    public $translatable = ['title'];

    public function services()
    {
        return $this->hasMany(Service::class);
    }

}
