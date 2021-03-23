import React from 'react';
import { fireEvent, render,act, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultPage from '../ResultPage';

test("Result page renders properly", () => {
    const defaultProps = {
        result : {"_id":"oqgEyNh","message":"Hello!","time":720,"expireAt":"2021-03-23T11:07:36.606Z","insertDate":"2021-03-23T10:55:36.606Z"}

    }
    const {getByTestId, getByAltText} = render(<ResultPage {...defaultProps} />)    

    expect(getByTestId("info-card-test-result")).toBeInTheDocument() // to check if the card is present
    expect(getByTestId("info-card-data-test-result")).toBeInTheDocument() // to check if the date is present
    // to check if correct date is present
    expect(getByTestId("info-card-data-test-result")).toHaveTextContent("Your message expires at " + new Date(defaultProps.result.expireAt).toLocaleString())
    expect(getByAltText("found")).toBeTruthy()
})