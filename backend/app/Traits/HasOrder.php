<?php

namespace App\Traits;

trait HasOrder
{
    public function setOrderAttribute($value)
    {
        $value = $value ?: $this->max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
