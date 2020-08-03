import React from "react";

interface BitLabelProps {
    power: number
}

export default ({power}: BitLabelProps) => {
    return (
        <div className={'bitLabel'}>
            {Math.pow(2, power)}
        </div>
    );
}
