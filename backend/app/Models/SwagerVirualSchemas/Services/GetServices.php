<?php

/**
 * @OA\Schema(
 *     title="Get Category Services response",
 *     description="Service collection",
 *     @OA\Xml(
 *         name="Services"
 *     )
 * )
 */

class GetCategoryServicesResponse
{

    /**
     * @OA\Property(
     *      title="categories",
     *      type="object",
     *      example={
     *     0: {
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
    1: {
    "id": 2,
    "title": "Distinctio.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Delectus quos eos sed eos saepe incidunt veniam. Deleniti tenetur assumenda ipsa et. Officia consequatur rerum illum dolor quis expedita. Id reprehenderit illo porro quae qui animi. Ratione veritatis perferendis impedit.",
    "duration": "8 minutes",
    "price": 932,
    "isPopular": 0,
    "short_description": "Qui ut debitis omnis numquam explicabo.",
    "min_age": "9",
    "required_experience": "",
    "max_depth": "1",
    "course_certificate": "Fugiat ut nobis nihil impedit. Blanditiis praesentium explicabo animi omnis nisi. Sunt unde aut saepe dolores quia sit. Enim reiciendis nostrum excepturi autem facilis harum non."
    },
    2: {
    "id": 3,
    "title": "Dolore rem.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Rem vel dolorem error rerum sit necessitatibus. Eos consequatur ad omnis quis facilis omnis. Iure dolores magni laboriosam tenetur maxime non.",
    "duration": "15 minutes",
    "price": 532,
    "isPopular": 1,
    "short_description": "Est corrupti et vel minima rerum molestias.",
    "min_age": "17",
    "required_experience": "14 hours",
    "max_depth": "1",
    "course_certificate": "Qui rerum qui iste voluptatem. Blanditiis quia culpa aut. Et aperiam voluptatem soluta deserunt. Enim quis totam occaecati debitis."
    },
    3: {
    "id": 4,
    "title": "Est labore.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Commodi laborum quae eum tempora. Rem ullam qui quod. Beatae aperiam temporibus cupiditate omnis.",
    "duration": "28 minutes",
    "price": 442,
    "isPopular": 1,
    "short_description": "Molestias et natus porro eius aliquam quam nihil.",
    "min_age": "26",
    "required_experience": "8 hours",
    "max_depth": "1",
    "course_certificate": "Et doloremque dolorem quae. Ducimus non voluptas ut dolore quod. Et eum iure eaque possimus debitis nulla repellendus."
    }
    }
     * )
     *
     * @var object
     */
    public $data;
}

/**
 * @OA\Schema(
 *     title="Get Popular Services response",
 *     description="Service collection",
 *     @OA\Xml(
 *         name="Services"
 *     )
 * )
 */
class GetPopularServicesResponse
{

    /**
     * @OA\Property(
     *      title="categories",
     *      type="object",
     *      example={
     *   {
    "id": 3,
    "title": "Dolore rem.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Rem vel dolorem error rerum sit necessitatibus. Eos consequatur ad omnis quis facilis omnis. Iure dolores magni laboriosam tenetur maxime non.",
    "duration": "15 minutes",
    "price": 532,
    "isPopular": 1,
    "short_description": "Est corrupti et vel minima rerum molestias.",
    "min_age": "17",
    "required_experience": "14 hours",
    "max_depth": "1",
    "course_certificate": "Qui rerum qui iste voluptatem. Blanditiis quia culpa aut. Et aperiam voluptatem soluta deserunt. Enim quis totam occaecati debitis.",
    "photos":{
     *          {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *           {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *     }
    },
    {
    "id": 4,
    "title": "Est labore.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Commodi laborum quae eum tempora. Rem ullam qui quod. Beatae aperiam temporibus cupiditate omnis.",
    "duration": "28 minutes",
    "price": 442,
    "isPopular": 1,
    "short_description": "Molestias et natus porro eius aliquam quam nihil.",
    "min_age": "26",
    "required_experience": "8 hours",
    "max_depth": "1",
    "course_certificate": "Et doloremque dolorem quae. Ducimus non voluptas ut dolore quod. Et eum iure eaque possimus debitis nulla repellendus.",
     *     "photos":{
     *          {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *           {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *     }
    },
    {
    "id": 6,
    "title": "Alias et.",
    "order": 2,
    "serviceCategory": 2,
    "description": "Eveniet doloribus ut in est. Odit est maxime nostrum enim ea. Quos expedita perferendis et aut a rerum officiis. Neque illum sint aut accusantium deleniti. Id quia ea debitis ut repudiandae molestiae et eum. Excepturi maiores voluptas qui in.",
    "duration": "27 minutes",
    "price": 213,
    "isPopular": 1,
    "short_description": "Voluptatibus sit omnis tenetur est natus animi tempore.",
    "min_age": "26",
    "required_experience": "13 hours",
    "max_depth": "0",
    "course_certificate": "",
     *     "photos":{
     *          {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *           {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *     }
    }
    ,
    "links": {
    "first": null,
    "last": null,
    "prev": null,
    "next": "http://localhost:8000/api/en/services/popular?cursor=eyJzZXJ2aWNlcy5pZCI6NiwiX3BvaW50c1RvTmV4dEl0ZW1zIjp0cnVlfQ"
    },
    "meta": {
    "path": "http://localhost:8000/api/en/services/popular",
    "per_page": 3
    }
    }
     * )
     *
     * @var object
     */
    public $data;
}

/**
 * @OA\Schema(
 *     title="Search Services response",
 *     description="Service collection",
 *     @OA\Xml(
 *         name="Services"
 *     )
 * )
 */

class SearchServicesResponse
{

    /**
     * @OA\Property(
     *      title="Services",
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
     *     "course_certificate": "Aut ab suscipit maiores vel tempore et. Alias aperiam facere et atque quaerat vel provident. Et expedita dicta deleniti quos omnis. Aliquam voluptatem saepe consequatur."
     *     },
     *     1: {
     *     "id": 2,
     *     "title": "Distinctio.",
     *     "order": 1,
     *     "serviceCategory": 1,
     *     "description": "Delectus quos eos sed eos saepe incidunt veniam. Deleniti tenetur assumenda ipsa et. Officia consequatur rerum illum dolor quis expedita. Id reprehenderit illo porro quae qui animi. Ratione veritatis perferendis impedit.",
     *     "duration": "8 minutes",
     *     "price": 932,
     *     "isPopular": 0,
     *     "short_description": "Qui ut debitis omnis numquam explicabo.",
     *     "min_age": "9",
     *     "required_experience": "",
     *     "max_depth": "1",
     *     "course_certificate": "Fugiat ut nobis nihil impedit. Blanditiis praesentium explicabo animi omnis nisi. Sunt unde aut saepe dolores quia sit. Enim reiciendis nostrum excepturi autem facilis harum non."
     *     },
     *     2: {
     *     "id": 3,
     *     "title": "Dolore rem.",
     *     "order": 1,
     *     "serviceCategory": 1,
     *     "description": "Rem vel dolorem error rerum sit necessitatibus. Eos consequatur ad omnis quis facilis omnis. Iure dolores magni laboriosam tenetur maxime non.",
     *     "duration": "15 minutes",
     *     "price": 532,
     *     "isPopular": 1,
     *     "short_description": "Est corrupti et vel minima rerum molestias.",
     *     "min_age": "17",
     *     "required_experience": "14 hours",
     *     "max_depth": "1",
     *     "course_certificate": "Qui rerum qui iste voluptatem. Blanditiis quia culpa aut. Et aperiam voluptatem soluta deserunt. Enim quis totam occaecati debitis."
     *     },
     *     3: {
     *     "id": 4,
     *     "title": "Est labore.",
     *     "order": 1,
     *     "serviceCategory": 1,
     *     "description": "Commodi laborum quae eum tempora. Rem ullam qui quod. Beatae aperiam temporibus cupiditate omnis.",
     *     "duration": "28 minutes",
     *     "price": 442,
     *     "isPopular": 1,
     *     "short_description": "Molestias et natus porro eius aliquam quam nihil.",
     *     "min_age": "26",
     *     "required_experience": "8 hours",
     *     "max_depth": "1",
     *     "course_certificate": "Et doloremque dolorem quae. Ducimus non voluptas ut dolore quod. Et eum iure eaque possimus debitis nulla repellendus."
     *     }
     *     }
     * )
     *
     * @var object
     */
    public $data;
}
