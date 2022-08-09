import React from 'react'
import { useCallback } from 'react';
import { useState, useMemo, useEffect } from 'react'

function MemoComponent() {
    const [counter, setCounter] = useState(1);

    const result = useMemo(() => {
        return factorial(counter);
    }, [counter]);

    const [name, setName] = useState("");

    const displayName = useCallback((greeting) => {
        return greeting + " " + name;
    }, [name]);

    return (
        <div>
            <h1>
                Factorial of {counter} is: <span>{result}</span>
            </h1>
            <div>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
            <hr></hr>
            <div>
                <div>
                    <label>Enter Name</label>
                </div>
                <input
                    type="text"
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <hr></hr>
                <DisplayName displayName={displayName}></DisplayName>
            </div>
        </div>
    )
}

const DisplayName = (({ displayName }) => {
    console.log("rendered");
    const [value, setValue] = useState("");
    useEffect(() => {
        setValue(displayName("Hello"));
    }, [displayName]);
    return <p>{`My name is ${value}`}</p>
});

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
    }
    let ii = 0;
    while (ii < 200000000) {
        ii++;
    }
    return answer;
}

export default MemoComponent;
