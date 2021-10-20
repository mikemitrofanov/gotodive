<?php


/**
 * @OA\Schema(
 *     title="Create User request",
 *     description="User",
 *     required={"email","name","password","password_confirmation"},
 *     @OA\Xml(
 *         name="User"
 *     )
 * )
 */
class RegisterRequest
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
     *      title="Password Confirmation",
     *      description="Password Confirmation of the User",
     *      example="Password"
     * )
     *
     * @var string
     */
    public $password_confirmation;

}

/**
 * @OA\Schema(
 *     title="Register response",
 *     description="User model",
 *     @OA\Xml(
 *         name="User"
 *     )
 * )
 */
class RegisterResponse
{
    /**
     * @OA\Property(
     *      title="Token",
     *      description="Users Token",
     *      example="6|6fLEwUHhb8HXBVWD07NQtcioHznVOlv700isztFJ"
     * )
     *
     * @var string
     */
    public $token;
}
