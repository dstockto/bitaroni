import React from "react";
import Bit from "components/Bit";
import 'style/bit.css';
import BitLabel from "./BitLabel";

interface BitzProps {
    number: number
}

export default ({number}:BitzProps) => {
    return (
        <div>
            <div className={'bitBox'} >
                <BitLabel power={7} />
                <BitLabel power={6} />
                <BitLabel power={5} />
                <BitLabel power={4} />
                <BitLabel power={3} />
                <BitLabel power={2} />
                <BitLabel power={1} />
                <BitLabel power={0} />
            </div>
            <div className={'bitBox'}>
                <Bit bit={7} number={number} />
                <Bit bit={6} number={number} />
                <Bit bit={5} number={number} />
                <Bit bit={4} number={number} />
                <Bit bit={3} number={number} />
                <Bit bit={2} number={number} />
                <Bit bit={1} number={number} />
                <Bit bit={0} number={number} />
            </div>
        </div>
    )
}
