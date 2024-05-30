import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count - 1);
    }
    
    return (
        <div className="container">
            <h1>Counter App</h1>
            <p>{count}</p>
            <div className="button-section">
                <button className="decream-button" onClick={increase}>Decreament</button>
                {/* use can setCount on the button too. */}
                <button className="reset-button" onClick={() => setCount(0)}>Reset</button> 
                <button className="increase-button" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
