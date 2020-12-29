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
	public $name; // Sender's name
	public $from; // Sender's email
	public $text; // Sender's message

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $fromEmail, $text)
    {
	$this->name = $name;
	$this->from = $fromEmail;
	$this->text = $text;
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
