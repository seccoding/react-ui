import ArticleList from "./components/article/ArticleList";


export default function ArticleApp() {
    const article = [
        {aNum: 1, aSubject: "안녕하세요", aWriter: "장민창", aViewCount: 1},
        {aNum: 2, aSubject: "리액트로 만든", aWriter: "장민창", aViewCount: 2},
        {aNum: 3, aSubject: "게시판이에요.", aWriter: "장민창", aViewCount: 3}
    ]
    return (
        <div>
            <ArticleList article={article}/>
        </div>
    );
}