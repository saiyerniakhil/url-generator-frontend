import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Footer from '../Footer'

test("Footer renders properly", () => {
    expect(render(<Footer/>)).toMatchSnapshot()
})