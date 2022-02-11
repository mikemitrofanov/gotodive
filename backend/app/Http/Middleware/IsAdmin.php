<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsAdmin
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
        $user = $request->user();
        $hasRights = $user->getRoles()->some(function ($role) {
            return in_array($role->slug, ['moderator', 'admin']);
        });
        if ($hasRights) {
            return $next($request);
        }

        return abort(403, 'Access denied');
    }
}
