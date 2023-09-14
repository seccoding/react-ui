import axios from "axios";
import { useEffect, useState } from "react";

export default function JsonPlaceholder() {

    const [posts, setPosts] = useState([])
    const [status, setStatus] = useState(0)

    // componentDidMount 해당.
    useEffect(() => {
        const readPostsUrl = "https://jsonplaceholder.typicode.com/posts"
        axios.get(readPostsUrl)
             .then((response) => {
                setPosts(response.data)
                setStatus(response.status)
             }) // 성공 Case (요청이 성공했다. 응답도 정상적으로 도착했다.)
             .catch((error) => {
                setPosts([])
                setStatus(error.response.status)
             }) // 실패 Case (요청이 실패했다. 응답이 제대로 오지 않았거나 응답에 에러 메시지가 포함되어 있다.)
    }, [])

    return (
        <div></div>
    );

}