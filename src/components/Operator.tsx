import React from "react";

interface OperatorProps {
    operator: string
    changeOperator: (op: string) => void
}

export default ({operator, changeOperator}: OperatorProps) => {
    let opDisplay;
    let next = 'or';
    if (operator === 'or') {
        opDisplay = 'OR |';
        next = 'and';
    }
    if (operator === 'and') {
        opDisplay = 'AND &';
        next = 'xor';
    }
    if (operator === 'xor') {
        opDisplay = 'XOR ^';
        next = 'or';
    }
    return (<div className={'operator ' + operator} onClick={() => changeOperator(next)}>{opDisplay}</div>);
};
