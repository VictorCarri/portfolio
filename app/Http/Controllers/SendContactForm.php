<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; // The Request from the route
use App\Mail\ContactFormSent; // The Mailable to send
use Illuminate\Support\Facades\Mail; // Mail facade to send mail with
use Illuminate\Support\Facades\Log; // Log::debug
#use Illuminate\Support\Str; 
use Illuminate\Validation\ValidationException; // To log what the exception says

class SendContactForm extends Controller
{
    /**
     * Handle the incoming request.
	* @param Request The incoming Request.
     */
    public function __invoke(Request $request)
    {
	Log::debug("SendContactForm::_invoke before validation:\nname = \"" . $request->name . "\"\nemail = \"" . $request->email . "\"\nmessage = \"" . $request->message . "\""); // Debugging

	/* Validate the request parameters */
	try
	{
		$validatedData = $request->validate(
			[
				"name" => ["alpha_num"],
				"email" => ["email"],
				"message" => ["alpha_num"]
			]
		);
	}

	catch (ValidationException $ve)
	{
		Log::debug("SendContactForm: caught validation exception.\nMessage: " . $ve->getMessage());
		throw $ve;
	}

	Log::debug("SendContactForm::__invoke: validatedData = \"" . var_export($validatedData, TRUE) . "\"");

	/* The code below will only run if the validation succeeds. Otherwise, Laravel will return an HTTP 422 with a JSON error */
	Log::debug("SendContactForm::__invoke: sending mail to " . env("MAIL_TO_ADDRESS"));

	Mail::to(env("MAIL_TO_ADDRESS"))->send(new ContactFormSent($validatedData["name"], $validatedData["email"], $validatedData["message"])); // Send the email

	Log::debug("SendContactForm::__invoke: sent mail with params:\n\tname = \"" . $validatedData["name"] . "\"\n\temail = \"" . $validatedData["email"] . "\"\n\tMessage = \"" . $validatedData["message"] . "\"");

	return response()->json( // Return a successful response
		[
			"formSent" => true
		],
		200
	);
    }
}
