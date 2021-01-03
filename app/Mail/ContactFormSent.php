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

	/* Declare public properties so that the template can access them */
	public $senderName; // Sender's name
	public $senderEmail; // Sender's email
	public $senderMessage; // Sender's message

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $fromEmail, $text)
    {
	$this->senderName = $name;
	$this->senderEmail = $fromEmail;
	$this->senderMessage = $text;
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
