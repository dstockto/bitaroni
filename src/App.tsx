import React, {useState} from 'react';
import logo from 'logo.svg';
import 'App.css';
import BitaroniTitle from 'components/BitaroniTitle';
import Bitz from "./components/Bitz";
import Operator from "./components/Operator";

type Operator = (num1: number, num2: number) => number

function App() {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(128);

    const [operator, setOperator] = useState('or');

    let bitOp: Operator = (n1, n2) => n1;

    if (operator === 'or') {
        bitOp = (n1, n2) => n1 | n2;
    }
    if (operator === 'xor') {
        bitOp = (n1, n2) => n1 ^ n2;
    }
    if (operator === 'and') {
        bitOp = (n1, n2) => n1 & n2;
    }

    return (
        <div className="App">
            <header className="App-header">
                <BitaroniTitle/>
                <img src={logo} className="App-logo" alt="logo"/>
                <label>Number 1: <input type={'number'} value={number1}
                                        onChange={(e) => setNumber1(255 & parseInt(e.target.value))}/> </label>
                <label>Number 2: <input type={'number'} value={number2}
                                        onChange={(e) => setNumber2(255 & parseInt(e.target.value))}/> </label>
                <Bitz number={number1}/>
                <Bitz number={number2}/>

                <Operator operator={operator} changeOperator={(op: string) => setOperator((op))} />

                <Bitz number={bitOp(number1, number2)} />
            </header>
        </div>
    );
}

export default App;
