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
						A Node server that exposes an authentication-guarded CRUD RESTful API that allows users to login to and edit the contents of the NoSQL database, as well as a pubListGroup.Itemc API for fetching the contents of the database. I initially built this on my local machine, then deployed it to AWS.
					</ListGroup.Item>
					<ListGroup.Item>
						A front-end built with Vue that provides interfaces for each of the CRUD functions (adding new nouns, updating noun info, etc.) along with a login interface and login state tracking. As with the backend, I initially built this on my local machine, then deployed it to AWS.
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
				<Row>
					<Col>
						I study languages in my spare time, one of them being Malayalam. I had been using a certain flashcard service to help me learn Malayalam vocabulary. Unfortunately, the service I had been using stopped offering their service. Thus, I decided to build my own database of Malayalam words. I started off with nouns, to allow myself to build a service that could take advantage of the characteristics of Malayalam nouns to work more efficiently, since it wouldn't have to deal with other categories of Malayalam words.
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<h1>
							How can I access it?
						</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						I have embedded it below, and it can also be accessed at&nbsp;
						<a href="https://malnounapp.victorcarri.com/">
							https://malnounapp.victorcarri.com/
						</a>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<iframe src="https://malnounapp.victorcarri.com/">
							Ooops!
						</iframe>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default MalNounDB;
