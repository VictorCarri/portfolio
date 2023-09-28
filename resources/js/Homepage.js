/* JS */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import ContactForm from './ContactForm';
import WOFSpinAnalyser from './WOFSpinAnalyser';

/* CSS */
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Homepage.css';

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
		<Router>
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
							<Nav.Link href="/wof">
								Wheel of Fortune Spin Analyser
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

			<Switch>
				<Route exact path="/" exact element={<Homepage />} />
				<Route path="/contact" children={<ContactForm />} />
				<Route path="/wof" children={<WOFSpinAnalyser />} />
			</Switch>
		</Router>
		);
	}
}

export default Homepage;
