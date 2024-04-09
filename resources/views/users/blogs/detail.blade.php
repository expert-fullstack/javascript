@extends('layouts.homeLayout')
@section('content')
   <div class="sufee-login d-flex align-content-center flex-wrap">
       <div class="container">
           <div class="login-content">
               <div class="login-logo"> 
                    
               </div>
               <div class="login-form">
                <div class="row">
                    <div class="col-12"> 
                        <div class="card mt-3"> 
                            <div class="card-body">
                              <h3 class="card-title">{{$data->title}}</h3> 
                              <h6>User : <span class="badge badge-warning">{{$data->user->name}}</span></h6>
                              <p class="card-text">{!!$data->description!!}</p>
                              <livewire:blog-comments :data="$data"/>
                            </div>
                          </div>
                    </div>
                 </div>
             
               </div>
           </div>
       </div>
   </div>
@endsection