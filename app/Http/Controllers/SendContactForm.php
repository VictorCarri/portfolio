<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; // The Request from the route
use App\Mail\ContactFormSent; // The Mailable to send
use Illuminate\Support\Facades\Mail; // Mail facade to send mail with
use Illuminate\Support\Facades\Log; // Log::debug

class SendContactForm extends Controller
{
    /**
     * Handle the incoming request.
	* @param Request The incoming Request.
     */
    public function __invoke(Request $request)
    {
	Log::debug("SendContactForm::_invoke: name = " . $request->name . "\n\temail = " . $request->email . "\n\tmessage = " . $request->message); // Debugging

	/* Validate the request parameters */
	$validatedData = $request->validate(
		[
			"name" => ["bail", "alpha_num", "required"],
			"email" => ["bail", "email", "required"],
			"message" => ["bail", "alpha_num", "required"]
		]
	);
	
	// The code below will only run if the validation succeeds. Otherwise, Laravel will return an HTTP 422 with a JSON error

	Mail::to(env("MAIL_FROM_ADDRESS"))->send(new ContactFormSent($validatedData->name, $validatedData->email, $validatedData->message)); // Send the email

	return response()->json( // Return a successful response
		[
			"status "=> "200",
			"message "=> "success"
		],
		200
	);
    }
}
