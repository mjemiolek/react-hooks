import React from 'react'
import ScreenComponent from './ScreenComponent';
import useCounter from './useCounter';

export default function CustomHookComponent() {
    const [counter, increment, decrement, reset] = useCounter(0, 5);

    return (
        <div className='border'>
            <h1>Custom Hook Examples</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            <ScreenComponent />
        </div>
    )
}
