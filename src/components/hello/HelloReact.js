// CSS 적용하기
import Welcome from "../welcome/Welcome";
import "./HelloReact.css"

// 컴포넌트 생성하기
export default function HelloReact() {
    // 컴포넌트의 UI 만들기
    let message = "Hello, React!"
    // 그냥 주석을 씁니다.
    return (
        <>
            {/* 여기는 return의 주석입니다.*/}
            {
                // 이것도 주석입니다.
            }
            <h1>{message}</h1>
            <Welcome />
        </>
    );
}