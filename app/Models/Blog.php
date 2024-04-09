<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }  

    public function comments(){
        return $this->hasMany('App\Models\BlogComment','blog_id')->where('parent',0);
    }
}
