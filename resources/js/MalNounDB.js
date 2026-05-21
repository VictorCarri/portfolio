/* JS */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

class MalNounDB extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<Container>
				<Row>
					<Col>
						<h1>
							What is it?
						</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						This is a multi-part project that consists of several components:
					</Col>
				</Row>
				<ListGroup numbered>
					<ListGroup.Item>
						A NoSQL noun database built with AWS DocumentDB.
					</ListGroup.Item>
					<ListGroup.Item>
						A Node server that exposes an authentication-guarded CRUD RESTful API that allows users to login to and edit the contents of the NoSQL database, as well as a pubListGroup.Itemc API for fetching the contents of the database.
					</ListGroup.Item>
					<ListGroup.Item>
						A front-end built with React that provides interfaces for each of the CRUD functions (adding new nouns, updating noun info, etc.) along with a login interface and login state tracking.
					</ListGroup.Item>
				</ListGroup>
				<hr />
				<Row>
					<Col>
						<h1>
							Why did I make it?
						</h1>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default MalNounDB;
