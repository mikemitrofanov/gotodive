<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
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
            'title' => $this->title,
            'link' => $this->link,
            'order' => $this->order,
            'serviceCategory' => $this->service_category_id,
            'description' => $this->description,
            'duration' => $this->duration,
            'price' => $this->price,
            'isPopular' => $this->is_popular,
        ];
    }
}
