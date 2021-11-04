<?php
/**
 * @OA\Schema(
 *    title="Show Service response",
 *     description="Service Model",
 *     @OA\Xml(
 *         name="Service"
 * )
 * )
 */

class ShowServiceResponse
{
    /**
     * @OA\Property(
     *      title="Service",
     *      type="object",
     *      example={
     *
    "id": 1,
    "title": "Nobis rerum.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Doloremque repellat earum iure vitae iusto. Doloremque et reiciendis doloribus. Esse hic quos et rerum. Beatae ea ut praesentium molestiae dicta.",
    "duration": "7 minutes",
    "price": 131,
    "isPopular": 0,
    "short_description": "Dolor a similique eum enim.",
    "min_age": "30",
    "required_experience": "",
    "max_depth": "1",
    "course_certificate": "Aut ab suscipit maiores vel tempore et. Alias aperiam facere et atque quaerat vel provident. Et expedita dicta deleniti quos omnis. Aliquam voluptatem saepe consequatur."
    },
     * )
     *
     * @var object
     */
    public $data;
}
