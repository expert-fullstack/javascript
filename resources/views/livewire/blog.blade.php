<div class="col-md-12">
    <span class="section-title-border"></span>

    <form wire:submit.prevent="createBlog" class="row">
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

<h3>Blog </h3>
        <div class="col-md-12">
            
            <input type="text" wire:model="title" id="title"
                class="form-control mb-2 mt-3 @error('title') b-error @enderror" placeholder="title">
            @error('title')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>
         
        <div class="col-md-12">
            <textarea wire:model="description" id="description"
                class="form-control mt-3 @error('description') b-error @enderror" 
                placeholder="Description"></textarea>
            @error('description')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>

         
        <div class="col-12">
            <button type="submit" class="btn btn-primary mt-3 hover-ripple" wire:loading.attr="disabled"
                wire:target="createBlog">
                <span wire:loading.remove wire:target="createBlog">
                    Submit
                </span>
                <span wire:loading wire:target="createBlog">
                    Processing...
                </span>
            </button>
        </div>

    </form>

</div>
