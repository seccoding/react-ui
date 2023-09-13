import { useRef } from "react";

export default function RefComponent() {

    const nameRef = useRef()

    function click() {
        const nameInput = nameRef.current
        console.log(nameInput)
        console.dir(nameInput)
        console.log(nameInput.dataset["name"])
        console.log(nameInput.value)

        if (nameInput.value == "") {
            alert("이름을 입력하세요!")
            nameInput.value = "이름은 필수값입니다!"
            nameInput.focus()
        }
    }

    return (
        <div>
            <input data-name="111" type="text" ref={nameRef} />
            <button onClick={click}>클릭!</button>
        </div>
    );

}