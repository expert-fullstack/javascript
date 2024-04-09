@extends('layouts.homeLayout')
@section('content')
   <div class="sufee-login d-flex align-content-center flex-wrap">
       <div class="container">
           <div class="login-content">
               <div class="login-logo"> 
                    
               </div>
               <div class="login-form">
                <h3>Blog   <a href="{{route('user.blogs.create')}}" class="btn btn-primary">+</a></h3>
                  <div class="row">
                    @foreach ($blogs as $record)
                        <div class="col-12">
                            <div class="card mt-3">
                                
                                <div class="card-body">
                                <h5 class="card-title">{{$record->title}} </h5> 
                               
                                <h6> <span class="badge badge-warning">{{$record->user->name ?? ''}}</span></h6>
                                <p>{{$record->description}}</p>  
                                <div class="text-right">  <a href="{{route('home.blogs.detail',$record->id)}}" class="btn btn-primary">View</a></div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                        
                        <div class="col-12">
                            {!! $blogs->withQueryString()->links('pagination::bootstrap-5') !!}
                        </div>
                  </div>
               </div>
           </div>
       </div>
   </div>
@endsection