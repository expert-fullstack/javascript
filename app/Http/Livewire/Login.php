<?php

namespace App\Http\Livewire;

use Illuminate\Http\Request;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class Login extends Component
{
    public $password;
    public $email; 
    // public $type = "admin";
    protected $rules = [
        'password' => 'required|min:6',
        'email' => 'required|email',
    ];

    public function render()
    { 
        return view('livewire.login');
    } 

    #-----------------------------------------------------------------------------------------------------
    # Function Divider
    #-----------------------------------------------------------------------------------------------------
    
    public function updated($propertyName)
    { 
        $this->validateOnly($propertyName);
    }
    
    #-----------------------------------------------------------------------------------------------------
    # Function Divider
    #-----------------------------------------------------------------------------------------------------
    
    public function checkLogin(Request $request)
    {
        $validatedData = $this->validate();
        $data = ['email' => $this->email, 'password' => $this->password];
       
        if(Auth::attempt($data))
        {  

          return redirect()->route('user.blogs.index'); 
            session()->flash('message', 'Login successfully.');
            // return redirect()->route('dashboard');
        }else{
            session()->flash('error', 'Invalid Credentials');
        }
    }
}