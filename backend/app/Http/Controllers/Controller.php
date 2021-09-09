<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * @OA\Info(
     *      version="1.0.0",
     *      title="GoToDive OpenApi Documentation",
     *      description="L5 Swagger OpenApi description",
     *      @OA\Contact(
     *          email="test@test.com"
     *      ),
     * )
     *
     * @OA\Server(
     *      url=L5_SWAGGER_CONST_HOST,
     *      description="API Server"
     * )
     *
     * @OA\Tag(
     *     name="Auth",
     *     description="API Endpoints of Auth"
     * )
     * @OA\Tag(
     *     name="Service Categories",
     *     description="API Endpoints of Categories"
     * )
     * @OA\Tag(
     *     name="Services",
     *     description="API Endpoints of Services"
     * )
     */
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
