import { useState } from "react";

export default function MemberList() {

    const [memberData, setMemberData] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")

    function changeName(event) {
        setName(event.target.value)
    }

    function changeAge(event) {
        setAge(event.target.value)
    }

    function changeAddress(event) {
        setAddress(event.target.value)
    } 

    function save() {
        let data = [...memberData]
        data.push({username: name, age, address})
        setMemberData(data)

        setName("")
        setAge("")
        setAddress("")
    }

    return (
        <div>
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" value={name} onChange={event => changeName(event)}/>
            </div>
            <div>
                <label htmlFor="age">나이:</label>
                <input type="text" id="age" value={age} onChange={event => changeAge(event)} />
            </div>
            <div>
                <label htmlFor="address">주소:</label>
                <input type="text" id="address" value={address} onChange={event => changeAddress(event)} />
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