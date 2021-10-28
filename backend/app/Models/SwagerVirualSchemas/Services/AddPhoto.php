<?php


/**
 * @OA\Schema(
 *     title="Add Photo",
 *     description="Photo",
 *     required={"photos"},
 * )
 */
class AddPhotoRequest
{
    /**
     * @OA\Property(
     *       title="Photos",
     *       type="array",
     *     minItems=2,
     *       @OA\Items(
     *              description="file to upload",
     *              type="string",
     *              format="binary",
     *
     *       )
     * )
     *
     */
    public $photos;

}
