<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Blog as Blogs;
class Blog extends Component
{
    public $title; 
    public $description; 
    protected $rules = [
        'title' => 'required', 
        'description' => 'required',  
    ];


    public function updated($propertyName)
    {
       $this->validateOnly($propertyName);
    }


    public function render()
    {  
        return view('livewire.blog');
    }


    public function createBlog()
    {
         $validatedData = $this->validate();   
         $b = new Blogs();
         $b->title = $this->title;
         $b->description = $this->description; 
         $b->user_id = auth()->user()->id;
        
         if($b->save()){
             session()->flash('message', 'Blog created successfully.');
             return redirect()->route('user.blogs.index');         
         }else{
            session()->flash('error', 'something wrong.');
         }
                 
              
    }
}
