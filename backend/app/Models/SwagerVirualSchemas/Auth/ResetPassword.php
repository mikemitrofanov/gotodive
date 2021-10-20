<?php

/**
 * @OA\Schema(
 *     title="Forgot Password Request",
 *     description="User model",
 *     @OA\Xml(
 *         name="User"
 *     )
 * )
 */
class ForgotPasswordRequest
{
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
     *      title="Token",
     *      description="User token from email",
     *      example="12a3272388778f3f3638317772b90126da1330a6a95a0ba9daede1494932751c"
     * )
     *
     * @var string
     */
    public $token;

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

class ResetPasswordRequest
{
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
class ForgotPasswordResponse
{
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
