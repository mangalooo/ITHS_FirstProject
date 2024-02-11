import { useState } from "react";

function MyEvent() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 30);
    };

    return (
        <div>
            <button onClick={handleClick}> Click me </button>
            <p> Count: {count} </p>
        </div>
    )
}

export default MyEvent;