<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use App\Models\ServiceCategory;

class ServiceController extends Controller
{

    public function index($language, ServiceCategory $serviceCategory)
    {
        return ServiceResource::collection($serviceCategory->services()->cursorPaginate(10));
    }

    public function store($language, CreateServiceRequest $request, ServiceCategory $serviceCategory)
    {
        $service = $serviceCategory->services()->create($request->validated());
        return new ServiceResource($service);
    }

    public function show($language, Service $service)
    {
        return new ServiceResource($service);
    }

    public function update($language, UpdateServiceRequest $request, Service $service)
    {
        $service->update($request->validated());
        return new ServiceResource($service);
    }


    public function destroy(Service $service)
    {
        $service->delete();
        return response()->noContent();
    }
}
