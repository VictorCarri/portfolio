/* JS */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import ContactForm from './ContactForm';
import AboutMe from "./AboutMe";

/**
* The main homepage website class.
**/
class Homepage extends React.Component
{
	/**
	* @desc Main render method called by React.
	* @return The entire page, rendered using JSX.
	**/
	render()
	{
		return (
		<BrowserRouter basename="/">
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Navbar.Brand href="#home">
					Victor Carri
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="collapsible-navbar" />
				<Navbar.Collapse id="collapsible-navbar">
					<Nav activeKey="/home" className="justify-content-end" variant="pills">
						<Nav.Item>
							<Nav.Link href="/">
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/projects">
								Projects
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/contact">
								Contact
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Routes>
				<Route path="/" element={<AboutMe />} />
				<Route path="/contact" element={<ContactForm />} />
			</Routes>
		</BrowserRouter>
		);
	}
}

export default Homepage;
