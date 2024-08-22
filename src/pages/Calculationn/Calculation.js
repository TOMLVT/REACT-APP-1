import React, { useState } from 'react';


const Calculation = () => {
    const [display, setDisplay] = useState('');

    const appendToDisplay = (value) => {
        setDisplay((prevDisplay) => prevDisplay + value);
    };

    const calculate = () => {
        try {
            setDisplay(eval(display).toString());
        } catch (error) {
            setDisplay("Error!");
        }
    };

    const clearDisplay = () => {
        setDisplay('');
    };

    return (
        <div>
            <div id="calculator">
                <input id="display" value={display} onChange={(e) => setDisplay(e.target.value)} readOnly />
                <div id="keys">
                    <button onClick={() => appendToDisplay('+')} className="operator-btn">+</button>
                    <button onClick={() => appendToDisplay('7')}>7</button>
                    <button onClick={() => appendToDisplay('8')}>8</button>
                    <button onClick={() => appendToDisplay('9')}>9</button>
                    <button onClick={() => appendToDisplay('-')} className="operator-btn">-</button>
                    <button onClick={() => appendToDisplay('4')}>4</button>
                    <button onClick={() => appendToDisplay('5')}>5</button>
                    <button onClick={() => appendToDisplay('6')}>6</button>
                    <button onClick={() => appendToDisplay('*')} className="operator-btn">*</button>
                    <button onClick={() => appendToDisplay('1')}>1</button>
                    <button onClick={() => appendToDisplay('2')}>2</button>
                    <button onClick={() => appendToDisplay('3')}>3</button>
                    <button onClick={() => appendToDisplay('/')} className="operator-btn">/</button>
                    <button onClick={() => appendToDisplay('0')}>0</button>
                    <button onClick={() => appendToDisplay('.')}>.</button>
                    <button onClick={calculate}>=</button>
                    <button onClick={clearDisplay} className="operator-btn">C</button>
                </div>
            </div>
        </div>
    );
};

export default Calculation;
