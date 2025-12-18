/* JS */
import React from 'react';

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
		);
	}
}

export default WOFSpinAnalyser;
