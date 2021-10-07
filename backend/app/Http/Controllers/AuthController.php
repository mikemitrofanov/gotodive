<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

        if (!Auth::attempt($request->validated())) {
            return response()->json([
                'message' => 'The provided credentials do not match our records.'
            ], 401);
        }

        return response()->json([
            'token' => Auth::user()->createToken('authToken')->plainTextToken
        ]);

    }

    public function register(RegisterRequest $request)
    {
        $user = User::create($request->validated());
        return response()->json([
            'token' => $user->createToken('authToken')->plainTextToken
        ]);

    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->noContent();
    }

    public function show()
    {
        return new UserResource(Auth::user());
    }

    public function update(UpdateUserRequest $request)
    {
        $request->user()->update($request->validated());
        return new UserResource($request->user());
    }

}
