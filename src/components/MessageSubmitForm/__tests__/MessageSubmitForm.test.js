import React from 'react';
import { fireEvent, render,act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageSubmitForm from '../MessageSubmitForm';

describe("MessageSubmitComponent renders correctly ", () => {

test("All inputs in the form working correctly", () => {
    const handleNotification = jest.fn()
    const {getByTestId} = render(<MessageSubmitForm handleNotification={handleNotification}/>)

    // checking textarea input 
    const TextAreaInput = getByTestId("text-area-test-form")
    fireEvent.change(TextAreaInput, {target: {value: "Hello, World!"}})
    expect(TextAreaInput.value).toBe("Hello, World!")
    
    //checking text input
    const TextInput = getByTestId("text-input-test-form")
    fireEvent.click(TextInput)
    fireEvent.keyDown(TextInput)
    expect(TextInput.value).not.toBe("-1") // Input should not be negative
    fireEvent.change(TextInput, {target : {value: "-1"}})
    expect(TextInput.value).not.toBe("-1") // Input should not be negative
    fireEvent.change(TextInput, {target : {value: "2"}})
    expect(TextInput.value).toBe("2")

    //checking select input
    const SelectInput = getByTestId("select-test-form")
    fireEvent.change(SelectInput, {target : {value: "seconds"}})
    expect(SelectInput).toHaveDisplayValue("Seconds")
})

test("Form submission is not done when all the inputs are not entered", () => {
    const handleNotification = jest.fn()
    const {getByTestId} = render(<MessageSubmitForm handleNotification={handleNotification}/>)
    const TextAreaInput = getByTestId("text-area-test-form")
    const TextInput = getByTestId("text-input-test-form")
    const SelectInput = getByTestId("select-test-form")
    const SubmitForm = getByTestId("submit-test-form")

    // filling the form incorrectly
    act(() => {
        fireEvent.change(TextInput, {target : {value: "0"}})
        fireEvent.change(SelectInput, {target : {value: "minutes"}})
        fireEvent.submit(SubmitForm)
    });
    

    expect(handleNotification).toHaveBeenCalledTimes(0)
})

test("Form submission is donw when valid inputs are entered", async () => {
    const handleNotification = jest.fn()
    jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
        status: 201,
        json: () => Promise.resolve({
            "uniqueUrl": "cHiJ4SD",
            "expireAt": "2021-03-20T04:24:32.292Z"
        })
    }))
    const {getByTestId} = render(<MessageSubmitForm handleNotification={handleNotification}/>)
    const TextAreaInput = getByTestId("text-area-test-form")
    const TextInput = getByTestId("text-input-test-form")
    const SelectInput = getByTestId("select-test-form")
    const SubmitForm = getByTestId("submit-test-form")

    // filling the form incorrectly
    act(() => {
        fireEvent.change(TextAreaInput, {target: {value: "Hello, World!"}})
        fireEvent.click(TextInput)
        fireEvent.change(SelectInput, {target : {value: 1}})
        fireEvent.change(SelectInput, {target : {value: "minutes"}})
    });
    
    fireEvent.submit(SubmitForm)
  
    expect(global.fetch).toHaveBeenCalledTimes(1);
})

})