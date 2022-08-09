import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function RefComponent() {
    const [name, setName] = useState("");
    const [counter, setCounter] = useState("");
    const inputEl = useRef("");
    const previousCounterRef = useRef("");
    console.log(inputEl);


    const resetInput = () => {
        setName("");
        inputEl.current.focus();
        console.log(inputEl.current.value);
        inputEl.current.value = "Dipesh";
    };

    useEffect(() => {
        previousCounterRef.current = counter;
    }, [counter]);

    return (
        <div>
            <div>
                <input ref={inputEl} name="name" autoComplete='off' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={resetInput}>Reset</button>
            </div>
            <div>My name is {name}</div>
            <div>
                <h1>Random Counter : {counter}</h1>
                {typeof previousCounterRef.current !== "undefined" && (
                    <h2>Previous Counter : {previousCounterRef.current}</h2>
                )}
                <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
                    Generate Number
                </button>
            </div>
        </div>
    )
}

export default RefComponent;
