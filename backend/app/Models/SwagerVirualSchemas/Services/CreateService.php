<?php

/**
 * @OA\Schema(
 *     title="Create Service request",
 *     description="Service model, requires moderator rights",
 *     required={"title", "description","duration","price","short_description","min_age",},
 *     @OA\Xml(
 *         name="Service"
 *     )
 * )
 */
class CreateServiceRequest
{
    /**
     * @OA\Property(
     *     title="Title",
     *     description="Name of the service",
     *     example="Deep hard diving"
     * )
     *
     * @var string
     */
    private $title;

    /**
     * @OA\Property(
     *      title="Order",
     *      description="Order position to retrieve service",
     *      format="int64",
     *      example="1"
     * )
     *
     * @var integer
     */
    public $order;
    /**
     * @OA\Property(
     *     title="Description",
     *     description="Long service description",
     *     example="Doloremque repellat earum iure vitae iusto. Doloremque et reiciendis doloribus. "
     * )
     *
     * @var string
     */
    private $description;
    /**
     * @OA\Property(
     *     title="Duration",
     *     description="Service duration",
     *     example="1 Hour"
     * )
     *
     * @var string
     */
    private $duration;
    /**
     * @OA\Property(
     *     title="Price",
     *     description="Service pricing",
     *     example="100"
     * )
     *
     * @var integer
     */
    private $price;
    /**
     * @OA\Property(
     *     title="IsPopular",
     *     description="Shows 1 if service is popular",
     *     example="1"
     * )
     *
     * @var boolean
     */
    private $isPopular;
    /**
     * @OA\Property(
     *     title="Short Description",
     *     description="Short service description",
     *     example="Doloremque repellat earum iure."
     * )
     *
     * @var string
     */
    private $short_description;
    /**
     * @OA\Property(
     *     title="Minimum Age",
     *     description="Shows minimum age required to sign up for service",
     *     example="10"
     * )
     *
     * @var integer
     */
    private $min_age;
    /**
     * @OA\Property(
     *     title="Required Experience",
     *     description="Shows experience required to sign up for service",
     *     example="15 hours"
     * )
     *
     * @var string
     */
    private $required_experience;
    /**
     * @OA\Property(
     *     title="Maximum Depth",
     *     description="Shows max depth customer will dive to",
     *     example="15 meters"
     * )
     *
     * @var string
     */
    private $max_depth;
    /**
     * @OA\Property(
     *     title="Course certificate",
     *     description="Shows required certificate",
     *     example="super duper diver certificate"
     * )
     *
     * @var string
     */
    private $course_certificate;
}
