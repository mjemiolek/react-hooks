import React from 'react';
import { useState } from 'react';
import './App.css';
import ClassContComp from './ClassContComp';
import { CounterContext } from './CounterContext';
import FuncContComp from './FuncContComp';

export default function ContextComponent() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }
    return (
        <div className='App border'>
            <h1>App Component</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <hr></hr>
            <CounterContext.Provider value={{ counter, setCounter }}>
                <FuncContComp />
                <hr></hr>
                {/* <ClassContComp /> */}
            </CounterContext.Provider>

        </div>
    )
}
