<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use Exception;

class AuthController extends Controller
{
    public function register(Request $request) {
        try {
            $fields = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|unique:users,email',
                'password' => 'required|string|min:8',
            ]);
    
            $user = User::create($fields);
    
            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user,
            ], 201);
        } catch(ValidationException $e) {
            return response()->json([
                'error' => 'Validation error',
                'messages' => $e->errors(),
                'status' => 422,
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error creating user',
                'message' => $e->getMessage(),
            ], 500);
        }
        
    }

    public function login(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => 'required|string|email',
                'password' => 'required',
            ]);

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'error' => 'Unauthorized',
                    'message' => 'Invalid email or password',
                ], 401);
            }

            $request->session()->regenerate();
                
            return response()->json([
                'message' => 'Logged in successfully',
                'user' => Auth::user(),
            ], 200);
    
        } catch(ValidationException $e) {
            return response()->json([
                'error' => 'Validation error',
                'messages' => $e->errors(),
            ], 422);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error in server ocurred ',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function logout(Request $request) {
        try {
            Auth::guard('web')->logout();

            $request->session()->invalidate();
            $request->session()->regenerateToken();
 
            return response()->json(['message' => 'Logged out successfully'], 200);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error in server ocurred ',
                'message' => $e->getMessage()
            ], 500);
        }    
    }

    public function user(Request $request) {
        try {
            $user = Auth::user();
            return response()->json($user);

        } catch (Exception $e) {
            return response()->json([
                'error' => 'Error in server ocurred ',
                'message' => $e->getMessage(),
            ], 500);
        }
        
    }
}
