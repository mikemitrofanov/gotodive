<?php

namespace App\Traits;

trait HasOrder
{
    public function setOrderAttribute()
    {
        $value = $this->order ?: $this->max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
