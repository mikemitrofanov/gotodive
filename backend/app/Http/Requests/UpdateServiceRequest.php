<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string',
            'order' => 'integer',
            'description' => 'required|string',
            'duration' => 'required|string',
            'price' => 'required|integer',
            'isPopular' => 'boolean',
            'short_description' => 'required|string',
            'min_age' => 'required|integer',
            'required_experience' => 'string',
            'max_depth' => 'string',
            'course_certificate' => 'string',
            'certification_requirements' => 'string',
            'min_logged_dives' => 'integer',
            'max_end' => 'string',
        ];
    }
}
