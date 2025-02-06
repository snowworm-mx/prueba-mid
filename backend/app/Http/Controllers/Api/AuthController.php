<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class AuthController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create($fields);

        return response()->json([
            'message' => 'User registered',
            'user' => $user,
        ]);
    }

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required',
        ]);
        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            
            return response()->json([
                'message' => 'Logged in',
                'user' => Auth::user(),
            ]);
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function logout(Request $request) {
        try {
            //Auth::logout();
            Auth::guard('web')->logout();

            $request->session()->invalidate();
            $request->session()->regenerateToken();
 
            return response()->json(['message' => 'Logged out'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        
    }

    public function user(Request $request) {
        $user = Auth::user();

        return response()->json($user);
    }
}
