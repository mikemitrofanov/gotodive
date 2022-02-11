<?php

/**
 * @OA\Schema(
 *    title="Show Service response",
 *     description="Service model",
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
     *     0: {
     *     "id": 1,
     *     "title": "Nobis rerum.",
     *     "order": 1,
     *     "serviceCategory": 1,
     *     "description": "Doloremque repellat earum iure vitae iusto. Doloremque et reiciendis doloribus. Esse hic quos et rerum. Beatae ea ut praesentium molestiae dicta.",
     *     "duration": "7 minutes",
     *     "price": 131,
     *     "isPopular": 0,
     *     "short_description": "Dolor a similique eum enim.",
     *     "min_age": "30",
     *     "required_experience": "",
     *     "max_depth": "1",
     *     "course_certificate": "Aut ab suscipit maiores vel tempore et. Alias aperiam facere et atque quaerat vel provident. Et expedita dicta deleniti quos omnis. Aliquam voluptatem saepe consequatur.",
     *    "photos":{
     *          {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *           {
     *          "id": 2,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *     }
     *     },
     *     }
     * )
     *
     * @var object
     */
    public $data;
}
