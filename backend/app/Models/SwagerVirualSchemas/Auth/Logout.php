<?php
/**
 * @OA\Schema(
 *     title="Logout",
 *     description="Logout User",
 *     @OA\Xml(
 *         name="Logout"
 *     )
 * )
 */
class LogoutRequest{
    /**
     * @OA\Property(
     *      title="User token",
     *      description="User token",
     *      example="6fLEwUHhb8HXBVWD07NQtcioHznVOlv700isztFJ"
     * )
     *
     * @var string
     */
    public $token;
}

/**
 * @OA\Schema(
 *     title="Logout",
 *     description="Logout User",
 *     @OA\Xml(
 *         name="Logout"
 *     )
 * )
 */
class LogoutResponse
{

}
