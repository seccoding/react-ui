import { useRef } from "react";

export default function RefComponent() {

    const nameRef = useRef()

    function click() {
        const nameInput = nameRef.current
        console.log(nameInput)
    }

    return (
        <div>
            <input type="text" ref={nameRef} />
            <button onClick={click}>클릭!</button>
        </div>
    );

}