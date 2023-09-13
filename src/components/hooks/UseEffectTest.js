import { useState } from "react";

export default function EffectComponent() {

    const [memberData, setMemberData] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")

    function changeName() {
        setName(Math.random())
    }

    function changeAge() {
        setAge(Math.random())
    }

    function changeAddress() {
        setAddress(Math.random())
    }

    function changeMemberData() {
        let data = [...memberData]
        data.push( {
            name,
            age,
            address
        } )
        setMemberData(data)
    }

    return (
        <div>
            <button onClick={changeName}>이름 변경하기</button>
            <button onClick={changeAge}>나이 변경하기</button>
            <button onClick={changeAddress}>주소 변경하기</button>
            <button onClick={changeMemberData}>목록 변경하기</button>
        </div>
    );
}