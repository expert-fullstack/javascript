<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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


 