/* JS */
import React from 'react';

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
							Being someone who strives to be objective and logical, I decided to start recording data about this part of the gameshow, so that I could eventually analyse it.
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default WOFSpinAnalyser;
