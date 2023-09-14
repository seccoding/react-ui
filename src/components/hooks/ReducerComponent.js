import { useReducer, useRef } from "react";
import { reducer } from "./reducer/CalcReducer";

export default function ReducerComponent() {

    const numberRef = useRef()
    const [result, dispatch] = useReducer(reducer, 0)
    
    return (
        <>
            <h1>계산기</h1>
            <h3>결과: {result}</h3>
            <input type="number" ref={numberRef} />
            <button onClick={() => dispatch({ type: "power", payload: numberRef.current.value })}>제곱구하기</button>
            <button onClick={() => dispatch({ type: "mod", payload: numberRef.current.value })}>나머지구하기</button>
        </>
    );

}