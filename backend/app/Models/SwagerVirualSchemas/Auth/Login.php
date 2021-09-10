<?php
/**
 * @OA\Schema(
 *     title="Login",
 *     description="Login User",
 *     @OA\Xml(
 *         name="Login"
 *     )
 * )
 */
class LoginRequest{

    /**
     * @OA\Property(
     *      title="Password",
     *      description="Password of the User",
     *      example="Password"
     * )
     *
     * @var string
     */
    public $password;


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

/**
 * @OA\Schema(
 *     title="Get User response",
 *     description="User model",
 *     @OA\Xml(
 *         name="User"
 *     )
 * )
 */
class LoginResponse
{
    /**
     * @OA\Property(
     *      title="Token",
     *      description="Users Token",
     *      example="3|6fLEwUHhb8HXBVWD07NQtcioHznVOlv700isztFJ"
     * )
     *
     * @var string
     */
    public $token;

    /**
     * @OA\Property(
     *     title="Id",
     *     description="User Id",
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
