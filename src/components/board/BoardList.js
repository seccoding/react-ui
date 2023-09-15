import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function BoardList( {item} ) {

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
            <div>
                <Link to="/write">글쓰기</Link>
            </div>
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

export function Detail( {item} ) {

    // /view/:num 의 값을 받아옴.
    const {num} = useParams()
    const detailItem = item.filter((each) => each.num == num)[0]

    return (
        <div>
            <div>
                번호: {detailItem.num}
            </div>
            <div>
                제목: {detailItem.title}
            </div>
            <div>
                작성자: {detailItem.author}
            </div>
            <div>
                조회수: {detailItem.viewCount}
            </div>
            <div>
                내용: {detailItem.desc}
            </div>
            <div>
                <Link to="/">목록으로 돌아가기</Link>
            </div>
        </div>
    );


}

export function Write( {item, setItem} ) {

    const titleRef = useRef()
    const authorRef = useRef()
    const descRef = useRef()

    const navigate = useNavigate()

    function save() {
        setItem( [...item, {
            num: item.length + 1,
            title: titleRef.current.value,
            author: authorRef.current.value,
            desc: descRef.current.value,
            viewCount: 0
        }] )

        navigate("/")
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="제목" ref={titleRef} />
            </div>
            <div>
                <input type="text" placeholder="작성자" ref={authorRef} />
            </div>
            <div>
                <textarea placeholder="내용" ref={descRef}></textarea>
            </div>
            <div>
                <button onClick={save}>저장</button>
                <Link to="/">목록으로 돌아가기</Link>
            </div>
        </div>
    );

}