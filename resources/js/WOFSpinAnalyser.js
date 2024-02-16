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
		alert("Hi from the WOF effect!");
	}

	render()
	{
		return (
			<p>Hello, world!</p>
		);
	}
}

export default WOFSpinAnalyser;
