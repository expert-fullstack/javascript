 
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
- Create a Livewire component named 'Login'.
  - Command: 
    ```bash
      php artisan make:livewire Login
      php artisan make:livewire Register
      php artisan make:livewire Blog
      php artisan make:livewire BlogComment
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