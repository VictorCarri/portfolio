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
	Log::debug("SendContactForm::_invoke: name = " . $request->name . "\n\temail = " . $request->email . "\n\tmessage = " . $request->message);
	$name = $request->name;
	$from = $request->email;
	$text = $request->message;
	Mail::to("victorcarri@gmail.com")->send(new ContactFormSent($name, $from, $text));
	return response()->json(
		[
			"status "=> "200",
			"message "=> "success"
		],
		200
	);
    }
}
