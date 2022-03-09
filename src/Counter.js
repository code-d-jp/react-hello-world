import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={e => setCount(count + 1)}>increment</button>
        </div>
    )
}

export default Counter;
