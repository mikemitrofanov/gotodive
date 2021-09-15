<?php

namespace App\Traits;

trait HasTranslatedFields
{

    public function collectionWithTranslation($collection, $language)
    {
        $translated = collect();
        $collection->each(function ($category) use ($language, $translated) {
            $translated->push($category->setLocale($language));
        });

        return $translated;
    }
}
