import { useEffect, useState } from "react";

export default function EffectComponent() {

    const [memberData, setMemberData] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")

    useEffect(() => {
        console.log(`이 함수는 props 또는 state중 
        하나라도 변경이 된다면 무조건 실행하는 함수입니다.`)
    }) // 의존배열 파라미터가 없다면 컴포넌트가 갱신될때마다 실행된다.
       // Lifecycle: componentDidMount, componentDidUpdate

    useEffect(() => {
        console.log(`이 함수는 컴포넌트가 
        처음으로 만들어질 때에만 실행되는 함수입니다.`)
    }, []) // 의존 배열 파라미터가 [] 라면 컴포넌트가 만들어 질 때만 실행된다.
           // Lifecycle: componentDidMount

    useEffect(() => {
        console.log(`이 함수는 컴포넌트의 name state가 변경되었을 때에만
        실행되는 함수 입니다.`)
    }, [name]) // Lifecycle: componentDidUpdate

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