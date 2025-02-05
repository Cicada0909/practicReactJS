import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClickPlusCounter = () => {
        setCounter(counter + 1);
    }

    const handleClickMinusCounter = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
        <div>Counter: {counter}</div>
        <button onClick={handleClickPlusCounter}>+1</button>
        <button onClick={handleClickMinusCounter}>-1</button>
        </div>
    )
}

export default Counter