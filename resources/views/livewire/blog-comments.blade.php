<div class="commentContainer">
    <h3>Comments <div class="col-12">
        <button type="button" wire:click="changeReplyBox()" class="btn btn-success btn-flat m-b-30 m-t-30  {{$commentID == 0 ? 'd-none' : ''}}"
              wire:click="changeReplyBox"
              wire:loading.attr="disabled"
              wire:target="changeReplyBox"> 
                Add New Comment 
      </button>
       
    </div>
</h3>

 
    <div  wire:loading wire:target="changeReplyBox" class="custom-loading loader">
        <div class="spinner">
          <div class="react1"></div>
          <div class="react2"></div>
          <div class="react3"></div>
          <div class="react4"></div>
          <div class="react5"></div>
        </div>
    </div>
 
    <div class="col-12 {{$commentID > 0 ? 'd-none' : ''}}" >
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
          <!-- Respuestas de los comentarios -->
          @if($c->comment_counts > 0)
          <ul class="comments-list reply-list">
              @foreach ($c->replies as $r)
              <li>
                  <!-- Avatar -->
                  <div class="comment-avatar"><img src="{{$r->user->profile_picture ?? 'https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png'}}" alt=""></div>
                  <!-- Contenedor del Comentario -->
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
</div>
