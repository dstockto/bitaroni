import React from 'react';
import 'style/bit.css';

interface BitProps {
    number: number;
    bit: number;
}

export default ({number, bit}: BitProps) => {
    const on = number & (Math.pow(2, bit));
    return (
        <div className={'bit ' + (on ? 'on' : 'off')}>
            {on ? 1 : 0}
        </div>
    );
}
