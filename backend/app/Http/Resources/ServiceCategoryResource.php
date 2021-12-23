<?php

namespace App\Http\Resources;

use App\Models\ServiceCategory;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceCategoryResource extends JsonResource
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
            'services' => ServiceResource::collection($this->whenLoaded('services')),
            'subcategories'=> SubcategoryResource::collection(ServiceCategory::where('parent_category_id',$this->id)->with('services')->get()),
        ];
    }
}
