import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'

/*
test('renders homepage', () => {
	const { getByText } = render(
});*/

function sum(x, y)
{
	return x + y;
}

describe("sum", () =>
	{
		it("Sums up 2 values", () =>
			{
				expect(sum(2, 4)).toBe(6);
			}
		);
	}
);
