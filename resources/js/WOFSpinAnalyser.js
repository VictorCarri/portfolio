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
		this.countURI = new URL(location.protocol + "//wof-spring-boot-test-env.eba-is45gqj2.ca-central-1.elasticbeanstalk.com/count"); // URI for the count function
	}

	handleFetchingCount(e)
	{
		console.log("handleFetchingCount: received input %o", e);
	}

	handleErrorWhileFetchingCount(e)
	{
		console.log("handleErrorWhileFetchingCount: received input %o", e);
	}

	componentDidMount()
	{
		alert("Hi from the WOF effect!");
		fetch(this.countURI, 
			{
				mode: "cors"
			}
		).then(this.handleFetchingCount.bind(this))
		.catch(this.handleErrorWhileFetchingCount.bind(this));
	}

	render()
	{
		return (
			<p>Hello, world!</p>
		);
	}
}

export default WOFSpinAnalyser;
