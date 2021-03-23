import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroImage from '../HeroImage';

describe("HeroImage renders properly",() => {
   
    test("when imageType is 'homepage' ", () => {
        const defaultProps = {
            imageName: "homepage"
        }
        const container = render(<HeroImage {...defaultProps}/>)
        const {getByAltText} = container
        expect(getByAltText("homepage")).toBeTruthy()
        expect(container.getByText("Welcome to URL Generator")).toBeInTheDocument();
    })

    test("when imageType is 'found' ", () => {
        let container = render(<HeroImage imageName="found"/>)
        const {getByAltText,queryByTestId} = container
        expect(getByAltText("found")).toBeTruthy()
        const helloText = queryByTestId("hero-text-test")
        expect(helloText).toBeNull()
    })

    test("when imageType is 'notfound' ", () => {

        const {getByAltText, queryByTestId} = render(<HeroImage imageName="notfound"/>)
        expect(getByAltText("notfound")).toBeTruthy()
        const helloText = queryByTestId("hero-text-test")
        expect(helloText).toBeNull();
        
    })

 
})
