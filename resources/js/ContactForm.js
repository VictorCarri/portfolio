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
	}

	handleSubmit(values, methods)
	{
		console.log(values);
		fetch("http://localhost:8000/api/sendMail", { // Send the email using our route
			method: "POST",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json" // Ensure that the server parses it correctly
			},
			body: JSON.stringify(values) // Send the form info as JSON
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));
	}

	/**
	* Main render method called by React.
	**/
	render()
	{
		return (
			<Formik
				validationSchema={this.schema}
				onSubmit={this.handleSubmit}
				initialValues={this.defaults}
			>
			{
				(
					{
						handleSubmit,
						handleChange,
						handleBlur,
						values,
						touched,
						isValid,
						errors
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
								defaultValue={values.name}
								isValid={touched.name && !errors.name}
							/>
						</rb.Form.Row>
						<rb.Form.Row>
							<rb.Form.Label>
								Email
							</rb.Form.Label>
							<rb.Form.Control
								type="email"
								name="name"
								defaultValue={values.email}
								isValid={touched.email && !errors.email}
							/>
						</rb.Form.Row>
						<rb.Form.Row>
							<rb.Form.Label>
								Message
							</rb.Form.Label>
							<rb.Form.Control
								as="textarea"
								isValid={touched.message && !errors.message}
								defaultValue={values.message}
							/>
						</rb.Form.Row>
						<rb.Button variant="primary" type="submit">
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
