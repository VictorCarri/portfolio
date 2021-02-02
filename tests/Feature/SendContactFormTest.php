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
    /*public function testExample()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }*/

	public function testSendContactForm()
	{
		Mail::fake(); // Ensure that we don't actually send an email!
		$fakeData = [ // TODO: Create fake data, then test that posting to this API route would send an email if faker weren't on
			"name" =>
			"email" =>
			"message" =>
		];
		$this->post("/api/sendMail");
	}
}
