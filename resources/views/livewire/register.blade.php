<div class="col-md-12">
    <span class="section-title-border"></span>

    <form wire:submit.prevent="createUser" class="row">
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


        <div class="col-md-12">
            <input type="text" wire:model="name" id="name"
                class="form-control mb-2 mt-3 @error('name') b-error @enderror" placeholder="Name">
            @error('name')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>
        <div class="col-md-12">
            <input type="email" wire:model="email" id="mail"
                class="form-control mt-3 @error('email') b-error @enderror" placeholder="Email">
            @error('email')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>
        <div class="col-md-12">
            <input type="text" wire:model="phone_number" id="phone"
                class="form-control mt-3 @error('phone_number') b-error @enderror" placeholder="Phone">
            @error('phone_number')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>
        <div class="col-md-12">
            <input type="password" wire:model="password" id="password"
                class="form-control mt-3 @error('password') b-error @enderror" placeholder="Password">
            @error('password')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>

        <div class="col-md-12">
            <select wire:model="role" id="role"
                class="form-control mt-3 @error('role') b-error @enderror">
                <option value="">Choose Role</option>
                <option value="user">User</option>
                 
            </select>
            @error('role')
                <span class="error text-danger">{{ $message . '*' }}</span>
            @enderror
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary mt-3 hover-ripple" wire:loading.attr="disabled"
                wire:target="createUser">
                <span wire:loading.remove wire:target="createUser">
                    Submit
                </span>
                <span wire:loading wire:target="createUser">
                    Processing...
                </span>
            </button>
        </div>

    </form>

</div>
