/* JS */
import React from 'react';
import * as rb from 'react-bootstrap';

/* CSS */
import "../css/wof.css";

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

	componentDidMount()
	{
	}

	render()
	{
		return (
			<div>
				<h1>Gameshow Data Analyser</h1>
				<br />
				<section>
					<h2>What is it?</h2>
					<div>
						<p>
							The backstory is that a family member of mine asserted &#40;without evidence&#41; that a <span class="italic">certain</span> game show&apos;s results weren&apos;t randomly distributed. Thus, they claimed that the part of the gameshow that was meant to assign a random result to a contestant was unfair.
						</p>
						<br />
						<p>
							Being someone who strives to be objective and logical, I decided to start recording data about this part of the gameshow, so that I could eventually analyse it. I started recording each day&apos;s &quot;final spin&quot; value &#40;the slot that the arrow on the final spin wheel settled on after the contestant who made it to the final round spun it&#41; in a spreadsheet, and decided to figure out how to analyse it later.
						</p>
						<br />
						My first attempt at analysing this was to make a pie chart that shows what percentage of the time each of the possible values on the wheel shows up. This would allow me to determine how close to the theoretically fair ideal results they came, or how far from them they strayed. I decided to build this pie chart as an Angular project to gain experience in building and deploying an Angular app. I built my Angular app locally, then deployed it on AWS.
						<br />
						<iframe src="https://wofchart.victorcarri.com/"></iframe>
					</div>
				</section>
			</div>
=======
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
