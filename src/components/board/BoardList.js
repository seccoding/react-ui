import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export default function BoardList() {

    // ReduxStore 에서 state를 받아오는 hook
    const item = useSelector( (state) => [...state] )

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
                <Link to="/articles/write">글쓰기</Link>
            </div>
            { /*Detail Component (Route 내부의 Route Component)*/ }
            <Outlet />
        </div>
    );
}

function Row( {num, title, author, viewCount} ) {

    return (
        <tr>
            <td>{num}</td>
            <td>
                <Link to={"/articles/" + num}>{title}</Link>
            </td>
            <td>{author}</td>
            <td>{viewCount}</td>
        </tr>
    );

}

export function Detail() {

    // /view/:num 의 값을 받아옴.
    const {num} = useParams()
    
    const item = useSelector( (state) => [...state] )
    // ReduxStore의 State를 변경하기 위한 Dispatch가 생성.
    const dispatch = useDispatch()

    // 조회수 증가 -> componentDidMount
    useEffect(() => {
        // ReduxStore의 state값을 갱신하려면
        // ReduxReducer에게 state값 갱신요청을 해야한다.
        // ReduxReducer에게 갱신 요청을 하기 위해 dispath가 필요하다.
        dispatch( { type: "read", payload: num } )
    }, [])

    // useEffect(() => {
    //     const copyItem = [...item]
    //     copyItem.map((each) => {
    //         if (each.num == num) {
    //             each.viewCount += 1
    //             return {...each}
    //         }
    //         return each
    //     })
    //     setItem(copyItem)
    // }, [])

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
                <Link to="/articles">목록으로 돌아가기</Link>
            </div>
        </div>
    );


}

export function Write() {

    const titleRef = useRef()
    const authorRef = useRef()
    const descRef = useRef()
    const navigate = useNavigate()

    const item = useSelector(state => [...state])
    const dispatch = useDispatch()

    function save() {
        // setItem( [...item, {
        //     num: item.length + 1,
        //     title: titleRef.current.value,
        //     author: authorRef.current.value,
        //     desc: descRef.current.value,
        //     viewCount: 0
        // }] )

        dispatch( { type: "regist", payload: {
            num: item.length + 1,
            title: titleRef.current.value,
            author: authorRef.current.value,
            desc: descRef.current.value,
            viewCount: 0
        } } )

        navigate("/articles")
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
                <Link to="/articles">목록으로 돌아가기</Link>
            </div>
        </div>
    );

}