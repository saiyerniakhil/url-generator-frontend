import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InstructionComponent from '../InstructionComponent';

test("Instruction component renders correctly", () => {
    expect(<InstructionComponent/>).toMatchSnapshot();
})