<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\TokenResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (Auth::attempt($credentials)) {
            $token = Auth::user()->createToken('');
            return new TokenResource($token);
        }

        return response()->noContent(401);
    }

    public function register(RegisterRequest $request)
    {
        dd('asffb');
        $user = User::create($request->validated());
//        $user->profile()->create($request->validated());

        $token = $user->createToken('');

        return new TokenResource($token);

    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->noContent();
    }


}
