import React from 'react';
import {render} from '@testing-library/react';
import SamuraiJSApp from "./App";

describe("button component", () => {
    test('renders learn react link', () => {
        const {getByText} = render(<SamuraiJSApp/>);
        const linkElement = getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });
});
