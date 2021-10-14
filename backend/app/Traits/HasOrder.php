<?php

namespace App\Traits;

trait HasOrder
{
    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
        $value = $this->order ?: $this->max('order') + 1;
        $this->attributes['order'] = $value;
    }
}
