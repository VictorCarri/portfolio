/* JS */
import React from 'react';
import * as rb from 'react-bootstrap';

class WOFSpinAnalyser extends React.Component
{
	/**
	* @param props Property arguments of this component. Unused for now.
	* @desc Constructor. Sets up our event handlers.
	**/
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<rb.Container>
				<rb.Row>
					<rb.Col>
						<h1>
							What is this?
						</h1>
						<span>
							At one point, one of my family members asserted that the wheel used for the final spin on a certain gameshow was biased. I disagreed, but had no data to back up my assertion. So I started writing down the slot that the arrow landed on when the wheel used for the final spin was spun in a Google spreadsheet.
							<br />
							<br />
							Then, I wrote a Java app using Spring Boot that used the Google Sheets client library to fetch the sheet data and determine how high a percentage of how many spins I had recorded each spin value represented. This app then exposed that data through a REST API. I then deployed this app to AWS, and created a subdomain for it under my domain.
							<br />
							<br />
							Next, I built an Angular app that fetched the data from this Java app and displayed it as a pie chart, using a library. I then deployed this app to AWS, and put this under another of my subdomains.
							<br />
							<br />
							Finally, I have embedded this here on my portfolio.
						</span>
					</rb.Col>
				</rb.Row>
				<rb.Row>
					<rb.Col>
						<iframe src="https://wofchart.victorcarri.com/"></iframe>
					</rb.Col>
				</rb.Row>
			</rb.Container>
		);
	}
}

export default WOFSpinAnalyser;
