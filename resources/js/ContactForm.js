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
		this.apiURI = new URL("http://localhost:8000/api/sendMail");
	}

	handleSubmit(values, {setSubmitting, resetForm})
	{

		setSubmitting(true); // When button resets form and form is in the process of submission
		fetch(this.apiURI, {
				method: "POST"
			}
		);
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
						isSubmitting,
						handleChange
					}
				) => 
				(
					<rb.Form
						noValidate
						onSubmit={handleSubmit}
					>
						<rb.Form.Row>
							<rb.Form.Label>
								Name
							</rb.Form.Label>
							<rb.Form.Control
								type="text"
								name="name"
								placeholder="Full Name"
								isValid={touched.name && !errors.name}
								onChange={handleChange}
							/>
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
								onChange={handleChange}
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
								onChange={handleChange}
							/>
						</rb.Form.Row>
						<rb.Button variant="primary" type="submit" disabled={isSubmitting}>
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
