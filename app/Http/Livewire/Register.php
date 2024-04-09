<?php
namespace App\Http\Livewire;
use Illuminate\Http\Request;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class Register extends Component
{ 
    public $name;
    public $phone_number;
    public $email; 
    public $role; 
    public $password; 
    protected $rules = [
        'name' => 'required',
        'phone_number' => 'required|unique:users|numeric|digits:10',
        'password' => 'required', 
        'role' => 'required',
        'email' => 'required|email|unique:users',
    ];


    public function updated($propertyName)
    {
       $this->validateOnly($propertyName);
    }


    public function render()
    {  
        return view('livewire.register');
    }


    public function createUser($value='')
    {
         $validatedData = $this->validate();   
         $user = new User;
         $user->name = $this->name;
         $user->phone_number = $this->phone_number;
         $user->email = $this->email; 
         $user->role = $this->role; 
         $user->password = \Hash::make($this->password);
         if($user->save()){
            $data = ['email' => $this->email, 'password' => $this->password]; 
            $this->name = null;
            $this->phone_number = null;
            $this->email = null;
            $this->password = null; 
            session()->flash('message', 'Register successfully.');
           if(Auth::attempt($data))
            {  
                return redirect()->route('user.blogs.index'); 
               
            }
         }else{
            session()->flash('error', 'something wrong.');
         }
                 
              
    }
}
