export default function Buttons() {

    // 버튼이나 div를 클릭했을 때 동작할 함수.
    function click(event) {
        console.log(event.target.innerText)
        alert(event.target.innerText + "를 클릭했습니다.")
    }

    return (
        <div>
            <button onClick={ (event) => click(event) }>클릭1</button>
            <button onClick={ (event) => click(event) }>클릭2</button>

            <button>클릭3</button>
            <div>클릭4</div>
        </div>
    );

}