import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../Loader';

test("Loader renders properly", () => {
    expect(<Loader/>).toMatchSnapshot()
})