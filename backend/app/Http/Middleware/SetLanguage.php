<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLanguage
{
    public function handle(Request $request, Closure $next)
    {
        $supportedLanguages = ['ru', 'en', 'ukr'];
        if (!in_array($request->language, $supportedLanguages)) {
            return abort(400, 'Language code is not supported.');

        }

        app()->setLocale($request->language);
        return $next($request);
    }
}
