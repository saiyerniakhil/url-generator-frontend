import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import BufferPage from '../BufferPage';

describe("BufferPage is rendered correctly", () => {
    let originFetch;
    beforeEach(() => {
        originFetch = global.fetch;
      });
      afterEach(() => {
        global.fetch = originFetch;
      });
    test("Buffer page renders correctly", async () => {
        const dummyResponse = {
                    "_id": "odHppG4",
                    "message": "Hello, old friend!",
                    "time": 1000,
                    "insertDate": "2021-03-19T13:09:19.144Z"
                }
        const mRes = {json : jest.fn().mockResolvedValueOnce(dummyResponse)}
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes)
        global.fetch = mockedFetch
        const container = render(<MemoryRouter initialEntries={['/result/odHppG4']} >  <BufferPage/> </MemoryRouter>,{wrapper: MemoryRouter})
        const {getByTestId} = container
        const div = await waitFor(() => getByTestId('buffer-page-test'))
        expect(getByTestId("result-page-test")).toBeTruthy();
        expect(getByTestId("buffer-page-test")).toBeTruthy();
        expect(getByTestId("info-card-data-test-result")).toBeTruthy();
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);
    })
})

