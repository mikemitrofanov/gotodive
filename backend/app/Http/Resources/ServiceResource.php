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
            'id' => $this->id,
            'title' => $this->title,
            'order' => $this->order,
            'serviceCategory' => $this->service_category_id,
            'description' => $this->description,
            'duration' => $this->duration,
            'price' => $this->price,
            'isPopular' => $this->is_popular,
            'short_description' => $this->short_description,
            'min_age' => $this->min_age,
            'required_experience' => $this->required_experience,
            'max_depth' => $this->max_depth,
            'course_certificate' => $this->course_certificate,
        ];
    }
}
