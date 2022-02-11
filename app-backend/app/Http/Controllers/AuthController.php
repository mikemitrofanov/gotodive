<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    /**
     * Обработка попыток аутентификации.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            // $request->session()->regenerate();

            return response()->json([
                'token' => auth()->user()->createToken('hello')->plainTextToken
            ]);
        }

        return response()->json([
            'message' => 'The provided credentials do not match our records.'
        ], 400);
    }

    public function registration(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'token' => $token,
        ]);
    }

    public function getProfile(Request $request) {
        return [
            'user' => $request->user()
        ];
    }

    public function updateProfile(Request $request) {
        $user = $request->user();
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255',
                Rule::unique('users')->ignore($user->id, 'id')
            ],
        ]);

        $user->name = $request->name;
        $user->email = $request->email;

        $user->save();

        return [
            'user' => $request->user()
        ];
    }
}
