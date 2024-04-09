<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\{
    BlogComment,
    UserNotification
};
class BlogComments extends Component
{ 
    public $data = [];
    public $comments = [];
    public $commentID = 0;
    public $comment =''; 
    protected $rules = [ 
        'comment' => 'required',
    ];
    public function render()
    { 
        $this->comments();
        return view('livewire.blog-comments');
    }
    public function mount() {
        // $this->comments();
    }

    public function updated($propertyName)
    {     
        $this->validateOnly($propertyName);
    }

    public function changeReplyBox($id=0){
        $this->comment ='';
        $this->commentID = $id;
        return 1;
    }

    public function sendMessage(){
        $validatedData = $this->validate(); 
        $blog_id = $this->data->id; 
        $user = \Auth::user();  
        $grand_parent = $this->commentID; 
        $d =  BlogComment::find($this->commentID); 
        $grand_parent = !empty($d) ? $d->grand_parent : $this->commentID;
        $parent = $this->commentID;

        $b = new BlogComment();
        $b->blog_id  = $blog_id;
        $b->comment = $this->comment;
        $b->parent = $parent;
        $b->grand_parent = $grand_parent;
        $b->user_id = $user->id;
        $b->save();  
        $this->comment ='';
        session()->flash('message', 'comment added successfully.'); 
        $this->comments();
        $this->commentID = 0;
    }

    public function comments(){
        $comments = BlogComment::where('blog_id',$this->data->id)->where('parent',0)->orderBy('id','DESC')->get();
       
        $this->comments = $comments->map(function($comment){
            $comment->comment_counts = $comment->replies->count();
            $comment->user = $comment->user;
            // $d->replies = $d->repliesRecursive(); 
            $comment->replies =  !empty($comment->replies) ? $comment->replies->map(function($d1){ 
                        $d1->reply_comment_counts = $rplCount = $d1->replies->count();
                        $d1->user = $d1->user; 
                        $d1->replies = !empty($d1->replies) ? $d1->replies->map(function($d2){ 
                                $d2->reply_comment_counts = $d2->replies->count();
                                $d2->user = $d2->user; 
                                $d2->replies = !empty($d2->replies) ? $d2->replies->map(function($d3){ 
                                    $d3->reply_comment_counts = $d3->replies->count();
                                    $d3->user = $d3->user; 
                                    return $d3;
                                }) : [];
                                return $d2;
                            }) : [];
                        
                        return $d1;
                    }) : [];
             
            return $comment;
        });

    }
} 