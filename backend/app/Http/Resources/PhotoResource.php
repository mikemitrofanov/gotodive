<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PhotoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'photo_url' => asset("storage/" . $this->url),
//            'optimized_photo_url' => $this->optimized_url,
            'optimized_photo_url' => asset("storage/" . $this->optimized_url)
        ];
    }
}
