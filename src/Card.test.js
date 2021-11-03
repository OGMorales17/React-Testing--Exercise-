/*The Card component don’t have any smoke or snapshot tests.
Write one of each type of test */

import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test('should render without crashing', () => {
    render(<Card />)
})

it('Matches snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
})