import { useState } from "react";

export default function BoardList() {

    const [item, setItem] = useState([])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((item) => <Row key={item.num} 
                                                num={item.num}
                                                title={item.title}
                                                author={item.author}
                                                viewCount={item.viewCount}/>)
                    }
                </tbody>
            </table>
        </div>
    );
}

function Row( {num, title, author, viewCount} ) {

    return (
        <tr>
            <td>{num}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{viewCount}</td>
        </tr>
    );

}

export function Detail() {

}

export function Write() {

}