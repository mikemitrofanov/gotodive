<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Orchid\Screen\AsSource;
use Orchid\Filters\Filterable;

class Photo extends Model
{
    use HasFactory, AsSource, Filterable;

    protected $fillable = ['url', 'optimized_url'];

    /**
     * @var array
     */
    protected $allowedFilters = [
        'service_id',
        'created_at',
    ];

    /**
     * @var array
     */
    protected $allowedSorts = [
        'id',
        'service_id',
        'created_at',
    ];

    public function savePhoto($service, $photo)
    {
        $newPhoto = $service->photos()->create([
            'url' => $photo->store('images', 'public'),
            'optimized_url' => $photo->store('optimized', 'public'),
        ]);
        $manager = new ImageManager(array('driver' => 'imagick'));
        $manager->make('storage/' . $newPhoto->optimized_url)
            ->resize(320, 240)
            ->save('storage/' . $newPhoto->optimized_url);
        return $newPhoto;
    }

    public function deleteFile()
    {
        Storage::delete(['public/' . $this->url, 'public/' . $this->optimized_url]);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
