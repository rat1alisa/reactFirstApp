import React, { useState } from "react";
import { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "../common/Button/Button";
import { increment, decrement, reset } from '../../store/reducers/counterSlice';
import "./Counter.css";

interface RootState {
    counter: {
      count: number;
    };
  }

interface CounterProps {
    //props type
}

const Counter: React.FC <CounterProps> = () => {

    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    //const [count, setCount] = useState<number>(0);

    return (
        <div className="counterBlock">

        <h1>Counter: {count}</h1>
        
        <div>
        <Button onClick={() => dispatch(increment())}>👍</Button>
        <Button onClick={() => dispatch(decrement())}>👎</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        </div>
        
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

//[] - запуск действия после конкретного действия (хук вызовется 1 раз, после монтирования компонента/изменения состояния)


    

    {/*//const [count, setCount] = useState(0); 
    useEffect(() => { console.log('Count has changed')}, [count])
    //[] - хук вызовется 1 раз, после изменения состояния (изменения count)
    
    useLayoutEffect(() => {
        console.log("test title using useLayoutEffect");
        
    }, [])
    //изменит перед тем. как браузер перерисует экран
    useEffect(() => {
        console.log("test title using useEffect");
    }, [])


    {/*<h2>{count} likes</h2>
            <Button onClick={() => setCount(count + 1)}>👍</Button>
            <Button onClick={() => setCount(count - 1)}>👎</Button>
    <h3>Likes to increase/discrease</h3>
    
    <Button onClick={() => dispatch(increment())}>👍</Button>
        <Button onClick={() => dispatch(decrement())}>👎</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>


*/}













/*for (var i = 0; i <= a.length(); i++){
        if(a[i] % 2 == 0)
            return sum + a[i];
    }*/
