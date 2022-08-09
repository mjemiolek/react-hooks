import React, { useContext } from 'react'
import { CounterContext } from './CounterContext';

function FuncContComp() {
    const { counter, setCounter } = useContext(CounterContext);
    return (
        <div className='border'>
            <h1>Function Component</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <hr></hr>
            <Fchild />
        </div>
    )
}

const Fchild = () => {
    const { counter, setCounter } = useContext(CounterContext);
    return (
        <div className='border'>
            <h1>Function Child Component</h1>
            <h2>{counter}</h2>
        </div>
    );
}


export default FuncContComp;