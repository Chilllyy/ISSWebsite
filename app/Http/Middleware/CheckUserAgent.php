<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckUserAgent
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $userAgent = $request->header('User-Agent');
        if ($userAgent && str_contains($userAgent, 'okhttp/4.12.0')) {
            Log::info("Received okhttp version 4.12.0 request, redirecting to new API");
            return Inertia::location(route('api.value'));
        }
        return $next($request);
    }
}
