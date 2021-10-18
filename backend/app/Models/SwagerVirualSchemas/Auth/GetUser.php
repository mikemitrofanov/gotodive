<?php

/**
 * @OA\Schema(
 *     title="Get User response",
 *     description="User model",
 *     @OA\Xml(
 *         name="User"
 *     )
 * )
 */
class GetUserResponse
{
    /**
     * @OA\Property(
     *     title="ID",
     *     description="ID",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $id;

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

    /**
     * @OA\Property(
     *      title="roles",
     *      description="Define if user has admin rights",
     *      type="object",
     *      example={
     *      0: {
     *           "id": 2,
     *           "slug": "moderator",
     *           "name": "Moderator",
     *           "permissions": {
     *              "platform.index": true
     *              },
     *        },
     *     }
     * )
     *
     * @var object
     */
    public $roles;
}
