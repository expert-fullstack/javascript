<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
class BlogController extends Controller
{
    


    public function index(){
        $blogs = Blog::orderBy('created_at','DESC')->paginate(20);
        return view('users.blogs.index',['blogs' => $blogs]);
    }

    public function create(){
        return view('users.blogs.create');
    }

    public function detail($id){
        $data = Blog::find($id);
        return view('users.blogs.detail',['data' => $data]);
    }
}
