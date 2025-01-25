import React, { useState } from "react";
import { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../WeatherCard/Card.css";


const Card = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    {/*//const [count, setCount] = useState(0); 
    useEffect(() => { console.log('Count has changed')}, [count])
    //[] - хук вызовется 1 раз, после изменения состояния (изменения count)
    
    useLayoutEffect(() => {
        console.log("test title using useLayoutEffect");
        
    }, [])
    //изменит перед тем. как браузер перерисует экран
    useEffect(() => {
        console.log("test title using useEffect");
    }, [])*/}

    
    return (
        <div className="counterBlock">
            {/*<h2>{count} likes</h2>
            <Button onClick={() => setCount(count + 1)}>👍</Button>
            <Button onClick={() => setCount(count - 1)}>👎</Button>
    <h3>Likes to increase/discrease</h3>*/}

        <h1>Counter: {count}</h1>

        <div>
        <Button onClick={() => dispatch(increment())}>👍</Button>
        <Button onClick={() => dispatch(decrement())}>👎</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        </div>
        
        </div>
    )
};


export default Card;