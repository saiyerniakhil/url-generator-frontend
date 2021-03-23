import React from 'react';
import { fireEvent, render,act, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';

import ErrorPage from '../ErrorPage'

test("Error Page renders correctly", ()=> {
    const defaultProps = {
        result : null
    }
    const {queryByTestId, getByText, getByAltText} = render(<ErrorPage {...defaultProps}/>,{wrapper : MemoryRouter})
    const ErrorCard = queryByTestId("info-card-test-error")
    expect(ErrorCard).not.toBeNull()
    expect(getByText("here!")).toHaveAttribute("href","/") // has redirection to home page
    expect(getByAltText("notfound")).toBeTruthy()
})

