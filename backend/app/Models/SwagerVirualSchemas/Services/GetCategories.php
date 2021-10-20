<?php
/**
 * @OA\Schema(
 *     title="Get User request",
 *     description="User model",
 *     @OA\Xml(
 *         name="User"
 *     )
 * )
 */

class GetServicesResponse
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
