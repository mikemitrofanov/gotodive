<?php
/**
 * @OA\Schema(
 *     title="Get Categories response",
 *     description="Categories collection",
 *     @OA\Xml(
 *         name="Categories"
 *     )
 * )
 */

class GetCategoriesResponse
{

    /**
     * @OA\Property(
     *      title="categories",
     *      description="Define if user has admin rights",
     *      type="object",
     *      example={
     *     0: {
     *     "id": 1,
     *     "title": "Alias.",
     *     "order": 1
     *     },
     *     1: {
     *     "id": 2,
     *     "title": "Autem.",
     *     "order": 2
     *     },
     *     }
     * )
     *
     * @var object
     */
    public $data;
}

/**
 * @OA\Schema(
 *     title="Category With Services Respons",
 *     description="Category with services model",
 *     @OA\Xml(
 *         name="Category"
 *     )
 * )
 */
class CategoryWithServicesResponse
{

    /**
     * @OA\Property(
     *      title="categories",
     *      description="Define if user has admin rights",
     *      type="object",
     *      example={
     *       0: {
    "id": 1,
    "title": "Ducimus.",
    "order": 1,
    "services": {
    {
    "id": 1,
    "title": "Fuga esse soluta nam.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Ut facere in unde repudiandae blanditiis. Sit dolorem quo voluptas non eos qui. Rerum facere aut sint aut porro sit. Magni placeat et qui id fugiat voluptas sunt. Voluptas nam ut dolorem praesentium nisi doloribus velit. Aspernatur labore nemo velit asperiores minima esse in.",
    "duration": "7 минут",
    "price": 131,
    "isPopular": 0,
    "short_description": "Et autem totam qui quia porro adipisci consequatur.",
    "min_age": "30",
    "required_experience": "",
    "max_depth": "1",
    "course_certificate": "Ut quisquam dolor est nulla quia consectetur. Voluptatem dolorem omnis iste dignissimos sed sint animi. Et iste laudantium eum ad aperiam harum non. Voluptatem molestiae dolores reiciendis velit exercitationem iure dicta."
    },
    {
    "id": 2,
    "title": "Et qui ipsa quas.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Ut dolores consectetur cumque voluptates quos voluptate. Placeat eius dolorem distinctio dolorum beatae sit qui officia. Assumenda libero vitae ea. Ea quo consequuntur fugiat blanditiis quia doloribus. Rerum non porro dolor est aliquam. Dolore enim aliquid provident molestias accusamus atque.",
    "duration": "8 минут",
    "price": 932,
    "isPopular": 0,
    "short_description": "Et quo non nam non. Temporibus sapiente quia voluptates sunt architecto ut doloribus.",
    "min_age": "9",
    "required_experience": "",
    "max_depth": "1",
    "course_certificate": "Et laboriosam libero earum fuga amet. Alias magnam eveniet aut eos beatae. Assumenda dolor a voluptatibus nihil rerum. Dolores rerum fugit voluptatibus nobis itaque doloremque aut officia."
    },
    {
    "id": 3,
    "title": "Itaque molestiae et qui.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Autem quis et expedita. Excepturi beatae eos molestiae consectetur minus facilis dignissimos. Quia consequatur accusamus commodi sunt esse corporis incidunt nemo. Quaerat aut facilis consectetur cum accusantium. Iste vitae sit nesciunt voluptas laborum aperiam dolor. Est omnis ipsam nobis rerum quia quisquam vero enim.",
    "duration": "15 минут",
    "price": 532,
    "isPopular": 1,
    "short_description": "Voluptatum esse odit nisi error quisquam rerum. Dignissimos et beatae fugiat.",
    "min_age": "17",
    "required_experience": "14 часов",
    "max_depth": "1",
    "course_certificate": "Aut quae modi mollitia sint illum quis. Modi debitis vel accusamus. Magnam nisi quia enim impedit perspiciatis nostrum. Voluptatem tempore accusantium reprehenderit error inventore."
    },
    {
    "id": 4,
    "title": "Vitae dolorem qui sit.",
    "order": 1,
    "serviceCategory": 1,
    "description": "Reprehenderit qui repellendus qui placeat excepturi nihil. Dolor aut sed et sint. Quis repudiandae pariatur molestiae quis. Velit voluptatem eveniet et. Ipsam esse sint velit voluptatem cumque soluta vel. Sed veritatis odio porro earum quis dolor. Ea qui qui expedita facere consequuntur molestiae numquam.",
    "duration": "28 минут",
    "price": 442,
    "isPopular": 1,
    "short_description": "Optio esse sunt illo quod recusandae. Possimus totam omnis reprehenderit consequatur.",
    "min_age": "26",
    "required_experience": "8 часов",
    "max_depth": "1",
    "course_certificate": "Voluptatem libero ut voluptatem asperiores enim eum. Aut consectetur sapiente totam dignissimos non minus. Voluptatibus quia tempore consequuntur ut explicabo ea. Atque voluptatum consequatur qui perspiciatis saepe. Minus dolorem voluptas omnis. Corporis adipisci ut architecto quae sed. Totam minus recusandae quae."
    }
    }
    },
    1: {
    "id": 2,
    "title": "In.",
    "order": 1,
    "services": {
    {
    "id": 5,
    "title": "Amet minus et facere.",
    "order": 2,
    "serviceCategory": 2,
    "description": "Ullam voluptatem corporis quis laudantium commodi adipisci optio. Adipisci distinctio est facilis est. Laudantium optio quo numquam ut quo ipsum. Tenetur minima ea odio commodi. Magnam est illum eaque. Doloribus quis fuga soluta earum qui sint ad.",
    "duration": "26 минут",
    "price": 537,
    "isPopular": 0,
    "short_description": "Explicabo adipisci perferendis minima asperiores itaque accusamus impedit.",
    "min_age": "30",
    "required_experience": "",
    "max_depth": "1",
    "course_certificate": ""
    },
     *     }
     *     }
     *     }
     *     )
     *
     * @var object
     */
    public $data;
}

