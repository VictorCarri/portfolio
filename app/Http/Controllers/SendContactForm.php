<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; // The Request from the route
use App\Mail\ContactFormSent; // The Mailable to send
use Illuminate\Support\Facades\Mail; // Mail facade to send mail with

class SendContactForm extends Controller
{
    /**
     * Handle the incoming request.
	* @param Request The incoming Request.
     */
    public function __invoke(Request $request)
    {
	$contactInfo = json_decode($request->getContent(), true); // Convert the JSON string to an associative array
	Mail::to("victorcarri@gmail.com")->send(new ContactFormSent($contactInfo["name"], $contactInfo["email"], $contactInfo["message"]));
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
