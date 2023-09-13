import "./Welcome.css"

export default function Welcome() {

    const item = ["안녕하세요", "React", "Application 입니다."]
    const liStyle = {
        color: "#00F"
    }

    return (
        <ul>
            {
            /*
            <li>{item[0]}</li>
            <li>{item[1]}</li>
            <li>{item[2]}</li>
            */
            }

            {/* 배열을 반복해서 li로 변경한다. */}
            {
                item.map( (value, index) => 
                        <li key={index} 
                            style={liStyle}
                            onClick={e => alert(e.target.innerText)}>{value}</li> )
            }
        </ul>
    );

}