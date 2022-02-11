<?php

/**
 * @OA\Schema(
 *    title="Get Photos response",
 *     description="Photos Model",
 *     @OA\Xml(
 *         name="Service"
 * )
 * )
 */

class GetPhotosResponse
{
    /**
     * @OA\Property(
     *     type="object",
     *     title="Photos",
     *      example={
     *          {
     *          "id": 1,
     *           "photo_url": "images/1110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/6381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *           {
     *          "id": 2,
     *           "photo_url": "images/2110f3157b27168a194ab74b235c517f.png",
     *           "optimized_photo_url": "optimized/2381d8253c912ccd8980d588e9d4fd1e.png"
     *          },
     *     }
     *  )
     * @var object
     */
    public $data;
}
