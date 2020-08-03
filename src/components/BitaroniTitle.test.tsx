import BitaroniTitle from "./BitaroniTitle";
import {render,screen} from "@testing-library/react";
import React from "react";

describe('The Bitaroni title works', () => {
    test('it renders', () => {
        render(<BitaroniTitle/>);
        expect(screen.getByText('Bitaronium')).toBeInTheDocument();
    })
});
