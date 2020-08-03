import React from "react";
import {render, screen} from "@testing-library/react";
import Bit from "components/Bit";

describe("The Bit component works correctly", () => {
    test('It renders', () => {
        render(<Bit number={0} bit={0}/>);
    });

    test('If the number matches the bit, it will show as on', () => {
        render(<Bit number={1} bit={0}/>);
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('1')).toHaveClass('on');
    });

    test('if the number does not match the bit, it will show as off', () => {
        render(<Bit number={1} bit={1}/>);
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('0')).toHaveClass('off');
    });
});
