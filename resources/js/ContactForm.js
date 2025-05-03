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
				message: yup.string().required().min(1).ensure().trim().default(this.defaults.message) // ensure() transforms undefined and null values into empty strings
			}
		);

		/* Bind event handlers */
		this.handleSubmit = this.handleSubmit.bind(this);

		/* Setup to contact the Laravel API */
		this.apiURI = new URL(location.protocol + "//" + location.host + "/api/sendMail");
	}

	handleSubmit(values, {setSubmitting, resetForm})
	{
		setSubmitting(true); // When button resets form and form is in the process of submission
		
		/* Convert the object to form data for the request */
		var toSend = new FormData();
		toSend.append("name", document.querySelectorAll("#nameInp")[0].value);
		toSend.append("email", document.querySelectorAll("#emInp")[0].value);
		toSend.append("message", document.querySelectorAll("#msgInp")[0].value);
		fetch(this.apiURI, {
				method: "POST",
				body: toSend, // Send the form data
				mode: "same-origin", // No need for CORS
				credentials: "omit", // Don't need cookies to send mail
			}
		)
		.then(res => { 
			try
			{
				return res.json();
			}

			catch (e)
			{
				console.log("Error while converting result to json: %o", e);
				throw e;
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
		return (
			<Formik
				initialValues={this.defaults}
				validationSchema={this.schema}
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
						<rb.Form.Group>
							<rb.Form.Text>
								Please fill in your name, your email, and the message you&apos;d like to send me. I&apos;ll get back to you as soon as possible.
							</rb.Form.Text>
						</rb.Form.Group>
						<rb.Form.Group>
							<rb.Form.Label>
								Name
							</rb.Form.Label>
							<rb.Form.Control
								type="text"
								name="name"
								placeholder="Full Name"
								isValid={touched.name && !errors.name}
								aria-describedby="nameHelpBlock"
								id="nameInp"
							/>
							<rb.Form.Text id="nameHelpBlock" muted>
								Please enter your name - whatever you&apos;d like me to address you as.
							</rb.Form.Text>
						</rb.Form.Group>
						<rb.Form.Group>
							<rb.Form.Label>
								Email
							</rb.Form.Label>
							<rb.Form.Control
								type="email"
								name="email"
								isValid={touched.email && !errors.email}
								placeholder="Email"
								aria-describedby="emHlpBlck"
								id="emInp"
							/>
							<rb.Form.Text id="emHlpBlck" muted>
								Please enter an e-mail I can reach you at.
							</rb.Form.Text>
						</rb.Form.Group>
						<rb.Form.Group>
							<rb.Form.Label>
								Message
							</rb.Form.Label>
							<rb.Form.Control
								as="textarea"
								isValid={touched.message && !errors.message}
								name="message"
								placeholder="Message"
								aria-describedby="msgHlpBlck"
								id="msgInp"
							/>
							<rb.Form.Text id="msgHlpBlck" muted>
								Please enter your message.
							</rb.Form.Text>
						</rb.Form.Group>
						{errors.name && <div id="feedback">{errors.name}</div>}
						<rb.Button variant="primary" type="submit" disabled={isSubmitting} name="submit">
							Send your message
						</rb.Button>
					</rb.Form>
				)
			}
			</Formik>
		);
	}
}

export default ContactForm;
