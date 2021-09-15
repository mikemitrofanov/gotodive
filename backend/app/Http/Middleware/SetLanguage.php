<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $supportedLanguages =['ru', 'en', 'nl'];
        if (!in_array($request->language, $supportedLanguages)) {
            return abort(403, 'Language code is not supported.');

        }

        app()->setLocale($request->language);
        return $next($request);
    }
}
