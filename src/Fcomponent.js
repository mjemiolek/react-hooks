import React, { useEffect, useState } from 'react'

function Fcomponent() {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    useEffect(() => {
        const interval = setInterval(showDate, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [time]);

    const showDate = () => {
        setTime(new Date().toString());
    };

    return (
        <div>
            <div>{time}</div>
            <button onClick={showDate}>Show Date</button>
            <div>{message}</div>
            <button onClick={() => setMessage("Changed Functional Component")}>
                Change Message
            </button>
        </div>
    )
}

export default Fcomponent;