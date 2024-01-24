/* JS */
import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

/* CSS */
import "../css/aboutMe.css";

/* Images */
import profilePic from "../img/linkedin-profile-pic.jpeg";

/*
* A short blurb about me that contains my elevator pitch.
*/
class AboutMe extends React.Component
{
	constructor(props)
	{
		super(props);
		this.imgWidth = 256;
	}

	render()
	{
		return (
			<Container>
				<Row>
					<Col>
						<Image src={profilePic} roundedCircle fluid width={this.imgWidth} height={this.imgWidth} />
					</Col>
					<Col xs={16}>
						Hi! I'm Victor Carri! I'm a developer who likes having fun both on and off the computer. When I'm not working on a software project, I'm learning languages, playing games, or hanging out with my friends. Feel free to click the link above to contact me.
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AboutMe;
