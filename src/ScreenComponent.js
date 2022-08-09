import React from 'react'
import useScreen from './useScreen';

const ScreenComponent = () => {
    const screenSize = useScreen();
    return (
        <div>
            <h1>ScreenComponentotototo</h1>
            <h2>Jesteśmy w sekcji {screenSize}</h2>
        </div>
    )
}

export default ScreenComponent;
