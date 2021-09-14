<?php

namespace App\Traits;

trait HasTranslatedFields
{
    public function withTranslation($language)
    {
        $trans = [];
        foreach ($this->translatable as $field) {
            array_push($trans, [$field => $this->getTranslation($field, $language)]);
        }

        return $this->fill(...$trans);
    }

    public function collectionWithTranslation($language)
    {
        return $this::all()->each(function ($category) use ($language) {
            return $category->withTranslation($language);
        });

    }
}
