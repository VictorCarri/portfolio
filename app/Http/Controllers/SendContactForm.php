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
    public function __invoke(Request $request, $name, $from, $text)
    {
	$contactInfo = json_decode($request->getContent(), true); // Convert the JSON string to an associative array
	$name = str_replace("'", "", $name);
	$from = str_replace("'", "", $from);
	$text = str_replace("'", "", $text);
	Log::debug("SendContactForm::_invoke: contact info = " . var_export($contactInfo, true) . "\n\tname = " . $name . "\n\tfrom = " . $from . "\n\ttext = " . $text);
	Mail::to("victorcarri@gmail.com")->send(new ContactFormSent($name, $from, $text));
	return response()->json(
		[
			status => "200",
			message => "success",
			data => json_encode(array("sent_mail" => "success"))
		],
		200
	);
    }
}
