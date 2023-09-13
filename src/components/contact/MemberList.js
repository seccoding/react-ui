import { useRef, useState } from "react";

export default function MemberList() {
    const [memberData, setMemberData] = useState([])

    const nameRef = useRef()
    const ageRef = useRef()
    const addressRef = useRef()

    function save() {
        let data = [...memberData]
        data.push({
            username: nameRef.current.value, 
            age: ageRef.current.value, 
            address: addressRef.current.value 
        })
        setMemberData(data)

    }

    return (
        <div>
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" ref={nameRef} />
            </div>
            <div>
                <label htmlFor="age">나이:</label>
                <input type="text" id="age" ref={ageRef} />
            </div>
            <div>
                <label htmlFor="address">주소:</label>
                <input type="text" id="address" ref={addressRef} />
            </div>
            <div>
                <button onClick={() => save()}>저장</button>
            </div>
            <Member memberData={memberData} />
        </div>
    );

}

function Member( { memberData } ) {

    return (
        <>
            {
                memberData.map( (value, index) => 
                            <div key={index}>
                                <span>{value.username}</span>
                                <span>{value.age}</span>
                                <span>{value.address}</span>
                            </div> )
            }
        </>
    );
}