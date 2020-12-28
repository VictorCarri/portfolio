<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

/**
* Handles sending an email from the Contact form.
**/
class ContactFormSent extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $fromEmail, $message)
    {
	$this->name = $name;
	$this->from = $fromEmail;
	$this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.html.contact') // Default to the HTML view
		->text("mail.text.contact"); // Plaintext view
    }
}
