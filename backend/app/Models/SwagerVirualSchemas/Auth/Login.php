<?php

/**
 * @OA\Schema(
 *     title="Login request",
 *     description="Login User",
 *     @OA\Xml(
 *         name="Login"
 *     )
 * )
 */
class LoginRequest
{

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
 *     title="Login response",
 *     @OA\Xml(
 *         name="Login"
 *     )
 * )
 */
class LoginResponse
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
