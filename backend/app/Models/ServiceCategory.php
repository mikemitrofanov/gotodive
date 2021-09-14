<?php

namespace App\Models;

use App\Traits\HasOrder;
use App\Traits\HasTranslatedFields;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class ServiceCategory extends Model
{
    use HasFactory, HasOrder, HasTranslations, HasTranslatedFields;

    public $timestamps = false;
    protected $fillable = [
        'title',
        'order',
    ];
    public $translatable = ['title',];

    public function services()
    {
        return $this->hasMany(Service::class);
    }


}
