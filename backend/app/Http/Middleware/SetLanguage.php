<?php

namespace App\Http\Middleware;

use App\Models\Language;
use Closure;
use Illuminate\Http\Request;

class SetLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!Language::all()->contains('language_code', $request->language)) {
            return abort(403, 'Language code is not supported.');

        }

        app()->setLocale($request->language);
        return $next($request);
    }
}
