import React, { useState } from "react";
import Button from "../common/Button/Button";

const Counter = () => {
    const [count, setCount] = useState(0);  
    return (
        <div>
            <h2>{count} likes</h2>
            <Button onClick={() => setCount(count + 1)}>👍</Button>
            <Button onClick={() => setCount(count - 1)}>👎</Button>
            <h3>Likes to increase/discrease</h3>
        </div>
    )
};

export default Counter;

/*
var a = [1, 2, 3, 4, 5];
var result = a.reduce(function(sum, current) {
    //return sum + current;
    //return sum + current * !(current&1)
    //return sum + current * !(current < 0) - 
}, 0);
//sum = , 0

alert( result );


const users = [
    {id: "1", name: "John"},
    {id: "2", name: "John"},
    {id: "3", name: "John"},
]

const userNamesById = users.reduce(function(result, user) {
    return {
        ...result,
        //начало - 1 запись, далее дозаписываем
        [user.id]: user.name,
    }
}, {})*/














/*for (var i = 0; i <= a.length(); i++){
        if(a[i] % 2 == 0)
            return sum + a[i];
    }*/
