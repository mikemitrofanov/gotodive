<?php

/**
 * @OA\Schema(
 *     title="Reset Password request",
 *     description="User model",
 *     type="object",
 *     required={"email","token","password","password_confirmation"},
 * )
 */
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
/**
 * @OA\Schema(
 *     title="Forgot Password request",
 *     description="User model",
 *     type="object",
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
}
/**
 * @OA\Schema(
 *     title="Reset Password response",
 *     description="User model",
 *     type="object",

 * )
 */

class ResetPasswordResponse
{
    /**
     * @OA\Property(
     *      title="Token",
     *      description="User`s Token",
     *      example="3|6fLEwUHhb8HXBVWD07NQtcioHznVOlv700isztFJ"
     * )
     *
     * @var string
     */
    public $token;
}
