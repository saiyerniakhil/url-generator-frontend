import React from 'react';
import { fireEvent, render,act, getByTestId, queryByText, queryByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../HomePage';

describe("Homepage is rendered correctly", () => {
    test("when default props", () => {

        const {getByAltText,getByTestId,queryByTestId} = render(<HomePage/>)
    
        expect(getByAltText("homepage")).toBeTruthy()
        expect(getByTestId("message-form-test")).toBeTruthy()
        expect(queryByTestId("alert-notification")).toBeFalsy()
        expect(getByTestId("instruction-test")).toBeTruthy()
    })
})
