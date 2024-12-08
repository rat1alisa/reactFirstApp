import React, { useState } from "react";
import Button from "../common/Button/Button";

const Counter = () => {
    const [count, setCount] = useState(0);  
    return (
        <div>
            <h2>{count} likes</h2>
            <Button onClick={() => setCount(count + 1)}>👍</Button>
            <Button onClick={() => setCount(count - 1)}>👎</Button>
            <h3>Likes/dislikes to increase/discrease</h3>
        </div>
    )
};

export default Counter;
