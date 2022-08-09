import { useState } from "react";

export default function useCounter(initialValue, plusValue) {
    const [value, setValue] = useState(initialValue, plusValue);
    const increment = () => {
        return setValue(value + plusValue);
    };

    const decrement = () => {
        return setValue(value - plusValue);
    };

    const reset = () => {
        return setValue(initialValue);
    };

    return [value, increment, decrement, reset];
}