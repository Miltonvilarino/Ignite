import { useState, useCallback } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

        function handleIncrement(){
            setCounter(counter + 1);
        }
        
    return(
        <div>
            <h1>{counter} </h1>
            <button type="button" onClick={handleIncrement} >Increment</button>
        </div>
    )
}

export default Counter;