import React from 'react';
import { getByText, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header';
import { MemoryRouter } from 'react-router';

test('Header renders properly', () => {
    const {getByTestId, getAllByText} = render(<Header/>, {wrapper : MemoryRouter})
    expect(getByTestId("portfolio-navlink")).toHaveAttribute("href","https://github.com/saiyerniakhil")
    expect(getByTestId("portfolio-navlink")).toHaveAttribute("rel","noreferrer")
    expect(getByTestId("home-navlink")).toHaveAttribute("href","/")
    expect(getByTestId("navbar-brand-test")).toHaveAttribute("href","/")
    expect(getByTestId("navbar-brand-test")).toHaveTextContent("URL-GENERATOR")
})