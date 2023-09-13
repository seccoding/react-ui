import { useState } from "react";

export default function StepperApp() {
    return (
        <div>
            <Selector />
        </div>
    );
}

// 컴포넌트 (내부)
function Selector() {

    // State: 컴포넌트가 관리하는 데이터
    const [step, setStep] = useState(1)

    return (
        <div>
            <select onChange={ e => setStep(parseInt(e.target.value)) }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <Stepper step={step} />
        </div>
    );
}

// 컴포넌트 (내부)
function Stepper( {step} ) {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={ e => setCount(count - step) }>-</button>
            <input type="number" value={count} />
            <button onClick={ e => setCount(count + step) }>+</button>
        </div>
    );

}