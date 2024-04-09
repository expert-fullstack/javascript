 
Blog and Blog Comments with livewire

**Step 1: Install Laravel Project**
- Use Composer to create a new Laravel project named 'example-app' with version ^11.0.
  - Command: 
    ```bash
    composer create-project laravel/laravel:^11.0 example-app
    ```

**Step 2: Install Livewire**
- Add Livewire to your project dependencies using Composer.
  - Command: 
    ```bash
    composer require livewire/livewire
    ```
- Include Livewire styles and scripts in your Blade layout file.
  - Example: 
    ```bash
        <head>
        @livewireStyles
        </head>
        <body>
        ... 
        @livewireScripts
        </body>
        >> homelayout.blade.php
        
    ```
- Create a Livewire components.
  - Command: 
    ```bash
      php artisan make:livewire Login
      php artisan make:livewire Register
      php artisan make:livewire Blog
      php artisan make:livewire BlogComment
    ```

- Livewire compoments :.
  - login.blade.php: 
    ```bash
      <div>
        <form wire:submit.prevent="checkLogin">
            @csrf
            <div>
                @if (session()->has('message'))
                    <div class="alert alert-success">
                        {{ session('message') }}
                    </div>
                @endif
                @if (session()->has('error'))
                    <div class="alert alert-warning">
                        {{ session('error') }}
                    </div>
                @endif

            </div>

            <div class="form-group ">
                <label for="emailaddress">Email address</label>
                <input class="form-control @error('email') is-invalid @enderror" type="email" id="emailaddress"
                    placeholder="Enter your email" wire:model="email" />
                @error('email')
                    <span class="invalid-feedback text-danger" role="alert" style="display:block;">
                        <strong>{{ $message . '*' }}</strong>
                    </span>
                @enderror
            </div>
            <div class="form-group mb-3">
                <label for="password">Password</label>
                <div class="input-group input-group-merge @error('password') is-invalid @enderror">
                    <input class="form-control @error('password') is-invalid @enderror" wire:model="password"
                        type="password" placeholder="Enter your password" />
                    <div class="input-group-append" data-password="false">
                        <div class="input-group-text">
                            <span class="password-eye"></span>
                        </div>
                    </div>
                </div>
                <div class="text-sm-left">
                    @error('password')
                        <span class="invalid-feedback" role="alert" style="display:block;">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>


            <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30" wire:loading.attr="disabled"
                wire:target="checkLogin">
                <span wire:loading.remove wire:target="checkLogin">
                    Log in
                </span>
                <span wire:loading wire:target="checkLogin">
                    Processing...
                </span>
            </button>

        </form>
    </div>
    ```

    - register.blade.php: 
    ```bash
        <div class="col-md-12">
            <span class="section-title-border"></span>

            <form wire:submit.prevent="createUser" class="row">
                <div class="col-12">
                    @if (session()->has('message'))
                        <div class="alert alert-success">
                            {{ session('message') }}
                        </div>
                    @endif
                    @if (session()->has('error'))
                        <div class="alert alert-warning">
                            {{ session('error') }}
                        </div>
                    @endif

                </div>


                <div class="col-md-12">
                    <input type="text" wire:model="name" id="name"
                        class="form-control mb-2 mt-3 @error('name') b-error @enderror" placeholder="Name">
                    @error('name')
                        <span class="error text-danger">{{ $message . '*' }}</span>
                    @enderror
                </div>
                <div class="col-md-12">
                    <input type="email" wire:model="email" id="mail"
                        class="form-control mt-3 @error('email') b-error @enderror" placeholder="Email">
                    @error('email')
                        <span class="error text-danger">{{ $message . '*' }}</span>
                    @enderror
                </div>
                <div class="col-md-12">
                    <input type="text" wire:model="phone_number" id="phone"
                        class="form-control mt-3 @error('phone_number') b-error @enderror" placeholder="Phone">
                    @error('phone_number')
                        <span class="error text-danger">{{ $message . '*' }}</span>
                    @enderror
                </div>
                <div class="col-md-12">
                    <input type="password" wire:model="password" id="password"
                        class="form-control mt-3 @error('password') b-error @enderror" placeholder="Password">
                    @error('password')
                        <span class="error text-danger">{{ $message . '*' }}</span>
                    @enderror
                </div>

                <div class="col-md-12">
                    <select wire:model="role" id="role"
                        class="form-control mt-3 @error('role') b-error @enderror">
                        <option value="">Choose Role</option>
                        <option value="user">User</option>
                        
                    </select>
                    @error('role')
                        <span class="error text-danger">{{ $message . '*' }}</span>
                    @enderror
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary mt-3 hover-ripple" wire:loading.attr="disabled"
                        wire:target="createUser">
                        <span wire:loading.remove wire:target="createUser">
                            Submit
                        </span>
                        <span wire:loading wire:target="createUser">
                            Processing...
                        </span>
                    </button>
                </div>

            </form>

        </div>

    ```
   - blog-comments.blade.php: 
    ```bash
     <div class="commentContainer">
        <h3>Comments </h3>
        <div class="col-12">
            <button type="button" wire:click="changeReplyBox()" class="btn btn-success btn-flat m-b-30 m-t-30  <?= $commentID == 0 ? 'd-none' : ''?>"
                  wire:click="changeReplyBox"
                  wire:loading.attr="disabled"
                  wire:target="changeReplyBox"> 
                    Add New Comment 
            </button>  
            </div> 
        </div> 
        <div wire:loading wire:target="changeReplyBox" class="custom-loading loader">
            <div class="spinner">
              <div class="react1"></div>
              <div class="react2"></div>
              <div class="react3"></div>
              <div class="react4"></div>
              <div class="react5"></div>
            </div>
        </div> 
        <div class="col-12 {{$commentID > 0 ? 'd-none' : ''}}">
          <form wire:submit.prevent="sendMessage">
              <div class="form-group "> 
                  <textarea class="form-control @error('comment') is-invalid @enderror"  
                  placeholder="Enter your comment" wire:model="comment"></textarea>
                  @error('comment')
                      <span class="invalid-feedback text-danger" role="alert" style="display:block;">
                          <strong>{{ $message.'*' }}</strong>
                      </span>
                  @enderror
              </div>  
              <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30"
                  wire:loading.attr="disabled"
                  wire:target="sendMessage">
                  <span wire:loading.remove wire:target="sendMessage">
                  Add Comment
                  </span>
                  <span wire:loading wire:target="sendMessage">
                  Processing...
                  </span>
                  </button> 
          
          </form> 
        </div>
        <div class="comments-container">   
            <ul id="comments-list" class="comments-list">
              @foreach ($comments as $c)
              <li>
                  <div class="comment-main-level">
                      <!-- Avatar -->
                      <div class="comment-avatar"><img src="{{$c->user->profile_picture ?? 'https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png'}}" alt=""></div>
                      <!-- Contenedor del Comentario -->
                      <div class="comment-box">
                          <div class="comment-head">
                              <h6 class="comment-name {{$c->user->role == 'admin' ? 'by-author' : ''}}"><a href="#">{{$c->user->name}}</a></h6>
                              <span>{{$c->created_at->diffForHumans()}}</span>
                              
                          </div>
                          <div class="comment-content">
                            {!!$c->comment!!} 
                          </div>
                        
                          <div class="col-12 text-right">
                              <button type="button" wire:click="changeReplyBox({{ $c->id }})" class="btn btn-success btn-flat m-b-30 m-t-30  {{$commentID == $c->id ? 'd-none' : ''}}"
                                    wire:click="changeReplyBox"
                                    wire:loading.attr="disabled"
                                    wire:target="changeReplyBox"> 
                                    Reply 
                            </button>
                            
                          </div>

                          <div class="col-12 {{$commentID != $c->id ? 'd-none' : ''}}" >
                            <form wire:submit.prevent="sendMessage">
                                <div class="form-group ">
                                    <label for="emailaddress">comment</label>
                                    <textarea class="form-control @error('comment') is-invalid @enderror"  
                                    placeholder="Enter your comment" wire:model="comment"></textarea>
                                    @error('comment')
                                        <span class="invalid-feedback text-danger" role="alert" style="display:block;">
                                            <strong>{{ $message.'*' }}</strong>
                                        </span>
                                    @enderror
                                </div> 

                                <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30"
                                    wire:loading.attr="disabled"
                                    wire:target="sendMessage">
                                    <span wire:loading.remove wire:target="sendMessage">
                                    Send
                                    </span>
                                    <span wire:loading wire:target="sendMessage">
                                    Processing...
                                    </span>
                                    </button> 
                            
                                </form>
                          </div>

                      </div>
                  </div> 
                  @if($c->comment_counts > 0)
                  <ul class="comments-list reply-list">
                      @foreach ($c->replies as $r)
                      <li> 
                          <div class="comment-avatar"><img src="{{$r->user->profile_picture ?? 'https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png'}}" alt=""></div>
                        
                          <div class="comment-box">
                              <div class="comment-head">
                                  <h6 class="comment-name {{$r->user->role == 'admin' ? 'by-author' : ''}}"><a href="#">{{$r->user->name}}</a></h6>
                                  <span>{{$r->created_at->diffForHumans()}}</span> 
                              </div>
                              <div class="comment-content">
                                  {!!$r->comment!!}
                              </div> 
                              <div class="col-12 text-right">
                                <button type="button" wire:click="changeReplyBox({{ $r->id }})" class="btn btn-success btn-flat m-b-30 m-t-30  {{$commentID == $r->id ? 'd-none' : ''}}"
                                      wire:click="changeReplyBox" wire:loading.attr="disabled" wire:target="changeReplyBox">Reply</button>
                              
                            </div>
          
                            <div class="col-12 {{$commentID != $r->id ? 'd-none' : ''}}" >
                              <form wire:submit.prevent="sendMessage">
                                  <div class="form-group ">
                                      <label for="emailaddress">comment</label>
                                      <textarea class="form-control @error('comment') is-invalid @enderror"  
                                      placeholder="Enter your comment" wire:model="comment"></textarea>
                                      @error('comment')
                                          <span class="invalid-feedback text-danger" role="alert" style="display:block;">
                                              <strong>{{ $message.'*' }}</strong>
                                          </span>
                                      @enderror
                                  </div> 
          
                                    <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30"
                                      wire:loading.attr="disabled"
                                      wire:target="sendMessage">
                                      <span wire:loading.remove wire:target="sendMessage">
                                      Send
                                      </span>
                                      <span wire:loading wire:target="sendMessage">
                                      Processing...
                                      </span>
                                      </button>  
                                  </form>
                            </div> 
                          </div>

                          @if($r->reply_comment_counts > 0)
                          <ul class="comments-list reply-list">
                              @foreach ($r->replies as $r1)
                              <li>
                                  <!-- Avatar -->
                                  <div class="comment-avatar"><img src="{{$r1->user->profile_picture ?? 'https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png'}}" alt=""></div>
                                  <!-- Contenedor del Comentario -->
                                  <div class="comment-box">
                                      <div class="comment-head">
                                          <h6 class="comment-name {{$r1->user->role == 'admin' ? 'by-author' : ''}}"><a href="#">{{$r1->user->name}}</a></h6>
                                          <span>{{$r1->created_at->diffForHumans()}}</span>
                                        
                                      </div>
                                      <div class="comment-content">
                                          {!!$r1->comment!!}
                                      </div>
                                  </div>
                              </li>
                              @endforeach 
                          </ul>
                          @endif


                      </li>
                      @endforeach 
                  </ul>
                  @endif
              </li>
              @endforeach 
              
          </ul>
        </div>
 
    ```

**Step 3: Create Database**
- Create a MySQL database named 'login_with_livewire'.

**Step 4: Set Environment Variables**
- In your .env file, configure the database connection settings.
  - Example:
    ```bash
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=login_with_livewire
        DB_USERNAME=root
        DB_PASSWORD=
    ```

**Step 5: Run Migrations**
- Create necessary tables by running migrations.
  - Command: 
    ```bash
    php artisan migrate
    ```
**Step 5:  Create controller, middlewware, and the routes** 
- Create necessary tables by running migrations.
  - Command: 
    ```bash
        Middlewares : 
        php artisan make:middleware userAuth  
        Controllers :  
          LoginController,
          BlogController, 
          DashboardController

    ```
**Step 6: add auth check in the middlewares acording to role**
- Create necessary tables by running migrations.
  - Command: 
    ```bash
        if(auth()->check()){
            return $next($request);
        }
        return redirect()->route('login');  

        Kernel.php
        protected $routeMiddleware = [
            'checkAuth' => \App\Http\Middleware\checkAuth::class, 
            'userAuth' => \App\Http\Middleware\userAuth::class, 
        ];

         
**Step 7: add auth check in the middlewares**
- Create necessary tables by running migrations.
  - Command: 
    ```bash
        
         Routes :  
          Route::get('/login', 'App\Http\Controllers\LoginController@login')->name('login')->middleware('checkAuth');
          Route::get('/register', 'App\Http\Controllers\LoginController@register')->name('register')->middleware('checkAuth');
          Route::get('/logout', 'App\Http\Controllers\LoginController@logout')->name('logout'); 

          Route::group(['middleware' => ['userAuth']], function(){
            Route::get('/dashboard', 'App\Http\Controllers\DashboardController@dashboard')->name('user.dashboard');
          
            Route::get('/blog/create', 'App\Http\Controllers\BlogController@create')->name('user.blogs.create');
            Route::post('/blog/create', 'App\Http\Controllers\BlogController@store')->name('user.blogs.create');
            Route::get('/blog/{id}/details', 'App\Http\Controllers\BlogController@detail')->name('home.blogs.detail');  
          });
          Route::get('/', 'App\Http\Controllers\BlogController@index')->name('user.blogs.index');

    ```

 
 **Step 8: Run project**
  - Command: 
    ```bash
    php artisan serve
    ```
  Server running on http://127.0.0.1:1000