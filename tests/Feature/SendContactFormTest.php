<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Mail\ContactFormSent;
use Illuminate\Support\Facades\Mail;

/**
* Tests the API route that sends a message from the contact form.
**/
class SendContactFormTest extends TestCase
{
	public function testContactApiHttpResponse()
	{
		/* Make the fake request */
		Mail::fake(); // Ensure that we don't actually send an email!
		$fakeData = [
			"name" => "abc",
			"email" => "test@test.com",
			"message" => "def"
		];
		$response = $this->postJson(route("sendEmail"), $fakeData); // Send the request to send an email

		/* Debugging 
		echo "Response header dump\n";
		$response->dumpHeaders();

		echo "Session data dump\n";
		$response->dumpSession();

		echo "Response dump\n";
		$response->dump();*/

		$response
			->assertStatus(200); // The response should be successful
	}

	public function testContactApiJsonResponse()
	{
		/* Make the fake request */
		Mail::fake(); // Ensure that we don't actually send an email!
		$fakeData = [
			"name" => "blah",
			"email" => "blah@adrjkadf.jke",
			"message" => "f032hf24jf240ifjk024fm24mf140jf13dj2103dj2103ra0sfhqj0n420f"
		];
		$response = $this->postJson(route("sendEmail"), $fakeData); // Send the request to send an email

		/* Debugging 
		echo "Response header dump\n";
		$response->dumpHeaders();

		echo "Session data dump\n";
		$response->dumpSession();

		echo "Response dump\n";
		$response->dump();*/

		$response
			->assertJson(
				[
					"formSent" => true
				]
			);
	}

	/**
	* @desc This test ensures that the mail API sends the correct response.
	**/
	public function testCorrectMailableSent()
	{
		/* Make the fake request */
		Mail::fake(); // Ensure that we don't actually send an email!
		$fakeData = [
			"name" => "abc",
			"email" => "test@test.com",
			"message" => "def"
		];
		$response = $this->postJson(route("sendEmail"), $fakeData); // Send the request to send an email
		Mail::assertSent(ContactFormSent::class); // Ensure that the right type of email was sent. The mailable's content is tested separately.
	}
}
