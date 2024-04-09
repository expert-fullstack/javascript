@extends('layouts.homeLayout')
@section('content')
   <div class="sufee-login d-flex align-content-center flex-wrap">
       <div class="container">
           <div class="login-content">
               <div class="login-logo"> 
                    <a href="{{route('logout')}}">Logout</a>
               </div>
               <div class="login-form">
                   <h1>Welcome to {{Auth::user()->name}}</h1>
                    
               </div>
           </div>
       </div>
   </div>
@endsection