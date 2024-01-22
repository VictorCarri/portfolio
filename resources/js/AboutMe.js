/* JS */
import React from "react";
import profilePic from "../img/linkedin-profile-pic.jpeg";
import Image from 'react-bootstrap/Image';

/*
* A short blurb about me that contains my elevator pitch.
*/
class AboutMe extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<p>
				Hi! I'm Victor Carri! I'm a developer who likes having fun both on and off the computer. When I'm not working on a software project, I'm learning languages, playing games, or hanging out with my friends.
				<Image src={profilePic} roundedCircle fluid />
			</p>
		);
	}
}

export default AboutMe;
