<?php

namespace App\Observers;

use App\Models\Service;

class ServiceObserver
{
    public function created(Service $service)
    {
        $service->setOrderAttribute();
    }


    public function updated(Service $service)
    {
        $service->setOrderAttribute();
    }

}
