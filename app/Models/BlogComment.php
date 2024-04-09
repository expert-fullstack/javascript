<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogComment extends Model
{
    use HasFactory;

    public function replies(){
        return $this->hasMany($this,'parent');
    }


    public function blog(){
        return $this->belongsTo('App\Models\Blog','blog_id');
    }
    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }

    public function repliesRecursive(){
        $replies = $this->replies; 
       if(!empty($replies)){
        $replies = $replies->map(function($d){ 
            $d->reply_comment_counts = $d->replies->count();
            $d->user = $d->user;
            $d->replies = $d->repliesRecursive();
            return $d;
        });
       } 
        return [];
    }
}
