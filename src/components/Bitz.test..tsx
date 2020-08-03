import {render, screen} from "@testing-library/react";
import React from "react";
import Bitz from "./Bitz";

describe('The Bitz component works', () => {
    it('has 8 labels', () => {
        render(<Bitz number={42}/>);
        screen.getByText('1')
    })
});
