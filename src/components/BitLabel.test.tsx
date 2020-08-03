import {render, screen} from "@testing-library/react";
import BitLabel from "./BitLabel";
import React from "react";

describe('the BitLabel component works', () => {
    test('it works for bit 0', () => {
        render(<BitLabel power={0}/>);
        screen.getByText('1');
    });

    test('it works for bit 1', () => {
        render(<BitLabel power={1}/>);
        screen.getByText('2');
    });

    test('it works for bit 2', () => {
        render(<BitLabel power={2}/>);
        screen.getByText('4');
    });

    test('it works for bit 3', () => {
        render(<BitLabel power={3}/>);
        screen.getByText('8');
    });

    test('it works for bit 4', () => {
        render(<BitLabel power={4}/>);
        screen.getByText('16');
    });

    test('it works for bit 5', () => {
        render(<BitLabel power={5}/>);
        screen.getByText('32');
    });

    test('it works for bit 6', () => {
        render(<BitLabel power={6}/>);
        screen.getByText('64');
    });

    test('it works for bit 7', () => {
        render(<BitLabel power={7}/>);
        screen.getByText('128');
    });
});
