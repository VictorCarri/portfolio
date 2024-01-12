/* JS */
import React from 'react';
import * as yup from 'yup';
import * as rb from 'react-bootstrap';
import { Formik } from 'formik';

/**
* My contact form.
**/
class ContactForm extends React.Component
{
	constructor(props)
	{
		super(props);
	
		/* Define the form's schema */
		this.defaults = {
			name: "Your Name",
			email: "name@domain.com",
			message: "Please enter your message"
		};
		this.schema = yup.object().shape(
			{
				name: yup.string().required().default(this.defaults.name),
				email: yup.string().email().required().default(this.defaults.email),
				message: yup.string().required().min(1).ensure().trim().default("Your message") // ensure() transforms undefined and null values into empty strings
			}
		);

		/* Bind event handlers */
		this.handleSubmit = this.handleSubmit.bind(this);

		/* Setup to contact the Laravel API */
		this.apiURI = new URL(window.location.protocol + "//" + window.location.hostname + "/api/sendMail");
		console.log("Contact form API URI: %o", this.apiURI);
	}

	handleSubmit(values, {setSubmitting, resetForm})
	{
		setSubmitting(true); // When button resets form and form is in the process of submission
		console.log("Values passed to handleSubmit: %o", values);
		
		/* Convert the object to form data for the request */
		var toSend = new FormData();
	
		for (var key in values)
		{
			console.log("values[%s] = %o", key, values[key]);
			toSend.append(key, values[key]);
		}

		for (var key of toSend.keys())
		{
			console.log("Key: %o\ntoSend[%o] = %o", key, key, toSend.get(key));
		}

		fetch(this.apiURI, {
				method: "POST",
				body: toSend, // Send the form data
				mode: "same-origin", // No need for CORS
				"credentials": "omit", // Don't need cookies to send mail
			}
		)
		.then(res => res.json())
		.then(res => {
			console.log(res);

			if (res.formSent)
			{
				alert("Thanks for sending me a message. I'll get back to you ASAP.");
			}

			else
			{
				alert("An error occurred while sending your response.");
			}
		})
		.catch(err => console.log("Error occurred while sending mail: %o", err));
		resetForm(); // Resets the form after submission is complete
		setSubmitting(false); // Sets submitting to false after the form is reset
	}	

	/**
	* Main render method called by React.
	**/
	render()
	{
		/*return (
			<Formik
				validationSchema={this.schema}
				initialValues={this.defaults}
				onSubmit={this.handleSubmit}
			>
			{
				(
					{
						errors,
						touched,
						handleSubmit,
						isSubmitting
					}
				) => 
				(
					<rb.Form
						noValidate
						onSubmit={handleSubmit}
					>
						<rb.Form.Row>
							<rb.Form.Text>
								Please fill in your name, your email, and the message you&apos;d like to send me. I&apos;ll get back to you as soon as possible.
							</rb.Form.Text>
						</rb.Form.Row>
						<rb.Form.Row>
							<rb.Form.Label>
								Name
							</rb.Form.Label>
							<rb.Form.Control
								type="text"
								name="name"
								placeholder="Full Name"
								isValid={touched.name && !errors.name}
								aria-describedby="nameHelpBlock"
							/>
							<rb.Form.Text id="nameHelpBlock" muted>
								Please enter your name - whatever you&apos;d like me to address you as.
							</rb.Form.Text>
						</rb.Form.Row>
						<rb.Form.Row>
							<rb.Form.Label>
								Email
							</rb.Form.Label>
							<rb.Form.Control
								type="email"
								name="email"
								isValid={touched.email && !errors.email}
								placeholder="Email"
							/>
						</rb.Form.Row>
						<rb.Form.Row>
							<rb.Form.Label>
								Message
							</rb.Form.Label>
							<rb.Form.Control
								as="textarea"
								isValid={touched.message && !errors.message}
								name="message"
								placeholder="Message"
							/>
						</rb.Form.Row>
						<rb.Button variant="primary" type="submit" disabled={isSubmitting}>
							Send your message
						</rb.Button>
					</rb.Form>
				)
			}
			</Formik>*/
		//return (<b>Hello, world!</b>);
		return (
			<Formik
				validationSchema={this.schema}
				initialValues={this.defaults}
				onSubmit={this.handleSubmit}
			>
			</Formik>
		);
	}
}

export default ContactForm;
