import axios from "axios";
import { useEffect, useState } from "react";

export default function JsonPlaceholder() {

    const [isLoad, setIsLoad] = useState(false)

    const [posts, setPosts] = useState([])
    const [status, setStatus] = useState(0)

    axios.interceptors.request.use((config) => {
        console.log(config)
        setIsLoad(true)
        return config
    }, (error) => {
        console.log(error)
        setIsLoad(false)
        return Promise.reject(error)
    })
    axios.interceptors.response.use((response) => {
        console.log(response)
        setIsLoad(false)
        return response
    }, (error) => {
        console.log(error)
        setIsLoad(false)
        return Promise.reject(error)
    })

    function getAllPosts() {
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
    }

    function getOnePost() {
        const readPostsUrl = "https://jsonplaceholder.typicode.com/posts/1"
        axios.get(readPostsUrl)
             .then((response) => {
                setPosts( [response.data] )
                setStatus(response.status)
             }) // 성공 Case (요청이 성공했다. 응답도 정상적으로 도착했다.)
             .catch((error) => {
                setPosts([])
                setStatus(error.response.status)
             }) // 실패 Case (요청이 실패했다. 응답이 제대로 오지 않았거나 응답에 에러 메시지가 포함되어 있다.)
    }

    function addNewPost() {
        const readPostsUrl = "https://jsonplaceholder.typicode.com/posts"
        axios.post(readPostsUrl, {
                title: "등록합니다.",
                body: "새로운 글이에요.",
                userId: 1
             })
             .then((response) => {
                // 새로 글 목록을 조회하는 기능.

                setPosts( [...posts, {
                    title: "등록합니다.",
                    body: "새로운 글이에요.",
                    userId: 1,
                    id: 201
                }] )
                setStatus(response.status)
             }) // 성공 Case (요청이 성공했다. 응답도 정상적으로 도착했다.)
             .catch((error) => {
                setPosts([...posts])
                setStatus(error.response.status)
             }) // 실패 Case (요청이 실패했다. 응답이 제대로 오지 않았거나 응답에 에러 메시지가 포함되어 있다.)
    }

    // componentDidMount 해당.
    // useEffect(() => {
    //     const readPostsUrl = "https://jsonplaceholder.typicode.com/posts"
    //     axios.get(readPostsUrl)
    //          .then((response) => {
    //             setPosts(response.data)
    //             setStatus(response.status)
    //          }) // 성공 Case (요청이 성공했다. 응답도 정상적으로 도착했다.)
    //          .catch((error) => {
    //             setPosts([])
    //             setStatus(error.response.status)
    //          }) // 실패 Case (요청이 실패했다. 응답이 제대로 오지 않았거나 응답에 에러 메시지가 포함되어 있다.)
    // }, [])

    if (status == 404) {
        return (
            <div>
                { isLoad ? <Spinner /> : <></> }
                <Buttons getAllPosts={getAllPosts} 
                         getOnePost={getOnePost}
                         addNewPost={addNewPost} /> 
                URL이 올바르지 않습니다.
            </div>
        );
    }
    else {
        return (
            <div>
                { isLoad ? <Spinner /> : <></> }
                <Buttons getAllPosts={getAllPosts} 
                         getOnePost={getOnePost}
                         addNewPost={addNewPost} /> 
                {
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                }
            </div>
        );
    }
}

function Buttons( {getAllPosts, getOnePost, addNewPost} ) {

    return (
        <div>
            <button onClick={getAllPosts}>조회</button>
            <button onClick={getOnePost}>한건 조회</button>
            <button onClick={addNewPost}>등록</button>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );

}

function Spinner() {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:999,
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }

    const imgStyle = {
        width: "150px"
    }

    return (
        <div style={style}>
            <img style={imgStyle} src="https://global.discourse-cdn.com/business7/uploads/streamlit/original/2X/2/247a8220ebe0d7e99dbbd31a2c227dde7767fbe1.gif" />
        </div>
    )
}