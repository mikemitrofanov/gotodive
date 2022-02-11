<?php

namespace App\Http\Middleware;

use App\Models\Language;
use Closure;
use Illuminate\Http\Request;

class SetLanguage
{
    public function handle(Request $request, Closure $next)
    {
        if (!Language::all()->contains('language_code', $request->language)) {
            return abort(400, 'Language code is not supported.');
        }

        app()->setLocale($request->language);
        return $next($request);
    }
}
