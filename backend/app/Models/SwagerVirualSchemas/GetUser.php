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
class GetUserRequest{
    /**
     * @OA\Property(
     *      title="Token",
     *      description="Users Token",
     *      example="6fLEwUHhb8HXBVWD07NQtcioHznVOlv700isztFJ"
     * )
     *
     * @var string
     */
    public $token;

}

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
     *      title="Is Admin",
     *      description="Define if user has admin rights",
     *      example="0/1"
     * )
     *
     * @var string
     */
    public $isAdmin;
}
