<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function show()
    {
        return Auth::user();
    }

    public function update(UpdateUserRequest $request)
    {
        $validatedData = $request->validated();
        $user = $request->user()->update($validatedData);

        return $user;
    }
}
