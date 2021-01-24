<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Mail\ContactFormSent; // The Mailable to test

class ContactFormTest extends TestCase
{
	/**
	* @desc Tests that a ContactFormSent mailable constructed with a given name contains that name in the HTML and text versions of the email.
	**/
    public function testSenderName()
    {
	$testName = "Abracadabra কার"; // An obviously fake name
	$mailable = new ContactFormSent($testName, "fake@fake.com", "fake message");
	$mailable->assertSeeInHtml($testName); // Ensure that the name shows up in the HTML version of the email
	$mailable->assertSeeInText($testName); // Ensure that the name shows up in the text version as well
    }

	// TODO: test the sender's email and message.
}
