<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Notification;

class AuthController extends Controller
{
    protected $user;

    /**
     * @OA\Post(
     *      path="/register",
     *      operationId="Create new User",
     *      tags={"Auth"},
     *      summary="Create user",
     *      description="Returns created user, some fields shold be unique",
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/RegisterRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/RegisterResponse")
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Entity",
     *      ),
     * )
     */

    public function register(RegisterRequest $request)
    {
        $user = User::create($request->validated());
        event(new Registered($user));
        return response()->json([
            'token' => $user->createToken('authToken')->plainTextToken
        ]);

    }

    /**
     * @OA\Post(
     *      path="/login",
     *      operationId="Login",
     *      tags={"Auth"},
     *      summary="Login",
     *      description="Returns token",
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/LoginRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/LoginResponse")
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Entity",
     *      ),
     * )
     */
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

    public function verifyEmail(Request $request)
    {
        $user = User::find($request->route('id'));

        if ($user->hasVerifiedEmail()) {
            return redirect(env('FRONT_URL') . '/email/verify/already-success');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return redirect(env('FRONT_URL') . '/email/verify/success');
    }

    /**
     * @OA\Post(
     *      path="/forgot-password",
     *      operationId="Request reset password link",
     *      tags={"Auth"},
     *      summary="Forgot Password",
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/ForgotPasswordRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Entity",
     *      ),
     * )
     */
    public function requestResetPasswordLink(Request $request)
    {
        $request->validate(['email' => 'required|email|exists:users,email']);

        $user = Password::getUser($request->only('email'));
        $status = Password::createToken($user);
        Notification::send($user, new ResetPasswordNotification($status));

        return response('success', 200);
    }

    /**
     * @OA\Post(
     *      path="/reset-password",
     *      operationId="Request reset password link",
     *      tags={"Auth"},
     *      summary="Forgot Password",
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/ForgotPasswordRequest")
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Entity",
     *      ),
     * )
     */
    public function setNewPassword(ResetPasswordRequest $request)
    {
        $status = Password::reset(
            $request->validated(),
            function ($user, $password) {
                $user->update(['password' => $password]);
                $this->user = $user;
                event(new PasswordReset($user));
            }
        );
        return $status === Password::PASSWORD_RESET
            ? response()->json([
                'token' => $this->user->createToken('authToken')->plainTextToken
            ]) : response('error', 400);
    }

    /**
     * @OA\Post(
     *      path="/logout",
     *      operationId="Logout User",
     *      tags={"Auth"},
     *      summary="Logout user",
     *      description="Returns nothing",
     *      security={{"apiAuth":{}}},
     *
     *      @OA\RequestBody(
     *          required=false,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     * )
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->noContent(200);
    }

    /**
     * @OA\Get(
     *      path="/users/me",
     *      operationId="showUser",
     *      tags={"User"},
     *      summary="Get list of projects",
     *      description="Returns list of projects",
     *      security={{"apiAuth":{}}},
     *
     *      @OA\RequestBody(
     *          required=false,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetUserResponse"),
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *     )
     */

    public function show()
    {
        return new UserResource(Auth::user());
    }

    /**
     * @OA\Put(
     *      path="/users/me",
     *      operationId="Update User",
     *      tags={"User"},
     *      summary="Update user",
     *      description="Returns user",
     *      security={{"apiAuth":{}}},
     *
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(ref="#/components/schemas/UpdateUserRequest")
     *      ),
     *
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/GetUserResponse")
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Unprocessable Entity",
     *      ),
     * )
     */
    public function update(UpdateUserRequest $request)
    {
        $request->user()->update($request->validated());
        return new UserResource($request->user());
    }

}
