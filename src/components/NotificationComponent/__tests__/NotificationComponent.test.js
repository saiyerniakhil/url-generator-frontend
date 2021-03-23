import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import NotificationComponent from '../NotificationComponent'

describe("NotificationComponent renders correctly", () => {


test('when proper props are passed', () => { 
    const defaultProps = {
        "response": {
          "uniqueUrl": "ZbKrYe_",
          "expireAt": "2021-03-23T06:25:52.245Z"
        },
        "type": "primary",
        "message": "Hello, There!",
        "url": "https://www.google.co.in"
    }
    const {getByTestId, getByLabelText, getByText} = render(<NotificationComponent {...defaultProps}/>)
    expect(getByTestId('alert-notification')).toHaveClass("alert alert-primary")
    expect(getByText('Hello, There!')).toBeTruthy();
    expect(getByTestId("copy-button")).toHaveTextContent("Copy")
    const urlComponent = getByTestId('url-component')
    expect(urlComponent.getAttribute('href')).toMatch(/(\/result\/ZbKrYe_)/i)
    expect(getByLabelText("Close").firstChild).toHaveTextContent("×")
})

test('when null response is passed', () => { 
    const defaultProps = {
        "response": null,
        "type": "primary",
        "message": "Hello, There!",
        "url": "https://www.google.co.in"
    }
    const {queryByTestId} = render(<NotificationComponent {...defaultProps} />)

    //shouldn't have any url component
    const urlComponent =  queryByTestId("url-component")
    expect(urlComponent).toBeNull();
})

    test("when copy button is clicked", () => {
        const defaultProps = {
            "response": {
              "uniqueUrl": "ZbKrYe_",
              "expireAt": "2021-03-23T06:25:52.245Z"
            },
            "type": "primary",
            "message": "Hello, There!",
            "url": "https://www.google.co.in"
        }
        Object.assign(navigator, {
            clipboard: {
              writeText: () => {},
            },
          });
          jest.spyOn(navigator.clipboard, "writeText");
          const {getByTestId} = render(<NotificationComponent {...defaultProps} />)
          const copyButton = getByTestId("copy-button")
          fireEvent.click(copyButton)
          expect(navigator.clipboard.writeText).toHaveBeenCalledWith("http://localhost/result/ZbKrYe_");
    })

    
})
