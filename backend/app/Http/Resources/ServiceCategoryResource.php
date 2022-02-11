<?php

namespace App\Http\Resources;

use App\Repositories\Interfaces\CategoryRepositoryInterface;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceCategoryResource extends JsonResource
{

    /**
     * @var CategoryRepositoryInterface|\Illuminate\Contracts\Foundation\Application|mixed
     */
    protected CategoryRepositoryInterface $categoryRepository;

    /**
     * @param $resource
     */
    public function __construct($resource)
    {
        $this->categoryRepository = resolve(CategoryRepositoryInterface::class);

        parent::__construct($resource);
    }
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
            'subcategories'=>$this->categoryRepository->allSubcategoriesOfCategory($this->id),
        ];
    }
}
