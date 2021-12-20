<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

class Contact extends Model
{
    use HasFactory, AsSource, Filterable;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'status',
    ];

    /**
     * @var array
     */
    protected $allowedFilters = [
        'service_id',
        'created_at',
        'status',
    ];

    /**
     * @var array
     */
    protected $allowedSorts = [
        'service_id',
        'created_at',
        'status',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
