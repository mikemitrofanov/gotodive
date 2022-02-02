<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use App\Models\Service;

class ContactController extends Controller
{
    public function index()
    {
        return ContactResource::collection(Contact::all());
    }

    /* public function store(CreateContactRequest $request, Service $service)
    {
        return new ContactResource(Service::create($request->validated()));
    } */
    public function store(CreateContactRequest $request, Contact $contact)
    {
        return new ContactResource(Contact::create($request->validated()));
    }
    public function storeWithRelation(CreateContactRequest $request, Service $service)
    {
        return new ContactResource($service->contacts()->create($request->validated()));
    }

    public function show(Contact $contact)
    {
        return new ContactResource($contact);
    }

    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());
        return new ContactResource($contact);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->noContent();
    }
}
