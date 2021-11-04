<?php

/**
 * @OA\Schema(
 *     title="Create category request",
 *     description="Category model, require moderator rights",
 *     required={"title"},
 *     @OA\Xml(
 *         name="Category"
 *     )
 * )
 */
class CreateCategoryRequest
{

    /**
     * @OA\Property(
     *      title="Title",
     *      description="Category Title",
     *      example="Scuba Diving"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *      title="Order",
     *      description="Order position to retrive Category",
     *      example="2"
     * )
     *
     * @var integer
     */
    public $order;
}

/**
 * @OA\Schema(
 *     title="Create category response",
 *     description="Category model",
 *     @OA\Xml(
 *         name="category"
 *     )
 * )
 */
class CreateCategoryResponse
{

    /**
     * @OA\Property(
     *      title="Category",
     *      description="Returns newly created category",
     *      type="object",
     *      example={
     *     "id": 1,
     *     "title": "Alias.",
     *     "order": 1
     *     }
     * )
     *
     * @var object
     */
    public $data;
}
