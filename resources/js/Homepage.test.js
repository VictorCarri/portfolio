import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './Homepage';

describe('sum test', () => {
	it('sums up two values', () => {
		expect(1+1).toBe(2);
	});
});

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Homepage', () => {
	it('Renders the homepage element', 
		render(<Homepage />);
	});
});*/
