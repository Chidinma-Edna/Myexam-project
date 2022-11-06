import React from "react"
import {Router, Link, Routes, Route} from "react-router-dom";
import { useCounter } from 'rooks';


const Counter = () => {
    const { value,
        
         increment, 
         decrement, 
        reset } = useCounter(0);
    return (
        <div>
            <p> Counter</p>
            <p> {value}</p>
            <button onClick={increment}>
                Increment</button><br /><br />
            <button onClick={decrement}>
                Decrement</button><br /><br />
           
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;
