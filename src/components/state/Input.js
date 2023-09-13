import { useState } from "react";

export default function Input() {

    // State 생성.
    const [value, setValue] = useState("")

    return (
        <div>
            <p>{value}</p>
            <input type="text" onKeyUp={e => setValue( e.target.value )} />
        </div>
    );

}