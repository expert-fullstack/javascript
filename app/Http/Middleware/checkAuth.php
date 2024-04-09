<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class checkAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(auth()->check()){
            switch (auth()->user()->role) {
                case 'admin':
                    return redirect()->route('admin.dashboard');
                    break;
                case 'vendor':
                    return redirect()->route('vendor.dashboard');
                    break;
                case 'user':
                    return redirect()->route('user.dashboard');
                    break;
                default:
                    # code...
                    break;
            }
        }
       
        return $next($request);
    }
}
