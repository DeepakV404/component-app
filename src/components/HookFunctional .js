import React, { useState } from 'react';

function HookFunctional () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick = {() => setCount(count+1), console.log(count)}>Click to increase count</button>
        </div>
    )
}

export default HookFunctional 
