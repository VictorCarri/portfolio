/* JS */
import React from "react";

class MalNounDB extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<div>
				<section>
					<h1>What is it?</h1>
					<p>
						This is a multi-part project that consists of several components:
					</p>
					<ol>
						<li>
							A NoSQL noun database built with AWS DocumentDB.
						</li>
						<li>
							A Node server that exposes an authentication-guarded CRUD RESTful API that allows users to login to and edit the contents of the NoSQL database, as well as a public API for fetching the contents of the database.
						</li>
						<li>
							A front-end built with React that provides interfaces for each of the CRUD functions (adding new nouns, updating noun info, etc.) along with a login interface and login state tracking.
						</li>
					</ol>
				</section>
				<hr />
				<section>
					<h1>Why did I make it?</h1>
				</section>
			</div>
		);
	}
};

export default MalNounDB;
