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
