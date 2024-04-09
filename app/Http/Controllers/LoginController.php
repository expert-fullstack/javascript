<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    //
    # Login View
    public function login(){
        return view('login');
    }

    # Register view 
    public function register(){
        return view('register');
    }

    # Register view 
    public function logout(){
       \Auth::logout();
       return redirect()->route('login');
    }
}
