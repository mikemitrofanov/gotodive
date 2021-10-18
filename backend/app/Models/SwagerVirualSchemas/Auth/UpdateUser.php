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
class UpdateUserRequest
{

    /**
     * @OA\Property(
     *      title="Name",
     *      description="Name of the User",
     *      example="Patric Uren"
     * )
     *
     * @var string
     */
    public $name;
    /**
     * @OA\Property(
     *      title="Email",
     *      description="User Email",
     *      example="example@example.com"
     * )
     *
     * @var string
     */
    public $email;


}

