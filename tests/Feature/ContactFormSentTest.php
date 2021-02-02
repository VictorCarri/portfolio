<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Mail\ContactFormSent; // The Mailable to test

/**
* Tests the mailable that we send when a user submits the contact form, NOT the controller route!
**/
class ContactFormSentTest extends TestCase
{
	/**
	* @desc Tests that a ContactFormSent mailable constructed with a given name contains that name in the HTML and text versions of the email.
	**/
    public function testSenderName()
    {
	$testName = "Abracadabra কার"; // An obviously fake namee
	$mailable = new ContactFormSent($testName, "fake@fake.com", "fake message");
	$mailable->assertSeeInHtml($testName); // Ensure that the name shows up in the HTML version of the email
	$mailable->assertSeeInText($testName); // Ensure that the name shows up in the text version as well
    }

	/**
	* @desc Tests that a ContactFormSent mailable constructed with a given email contains that email in the HTML and text versions of the email.
	**/
	public function testSenderEmail()
	{
		$testEmail = "abracadbra@করল.അഗ"; // An obviously fake email
		$mailable = new ContactFormSent("name", $testEmail, "fake message");
		$mailable->assertSeeInHtml($testEmail);
		$mailable->assertSeeInText($testEmail);
	}

	public function testMessage()
	{
		$testMessage = "Hello abacd কারি্ত ക്ിദാികാ κδργφολξφγ dsfjdsklfé"; // Random string - unlikely to be generated accidentally
		$mailable = new ContactFormSent("name", "test@test.com", $testMessage);
		$mailable->assertSeeInHtml($testMessage);
		$mailable->assertSeeInText($testMessage);
		
	}
}
