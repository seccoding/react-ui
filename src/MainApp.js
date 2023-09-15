import "./MainApp.css"

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BoardList, { Detail, Write } from "./components/board/BoardList";
import { useState } from "react";
import ComplexReducerHook from "./components/hooks/ComplexReducerHook";
import HelloReact from "./components/hello/HelloReact";

export default function MainApp() {

    const [item, setItem] = useState([])

    return (
        <BrowserRouter>
            <div id="grid">
                <div id="header">여기는 Header입니다.</div>
                <div id="aside">
                    <ul>
                        <li><Link to="/articles">게시판</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                        <li><Link to="/hello">HelloReact</Link></li>
                    </ul>
                </div>
                <div>
                    <Routes>
                        <Route path="/articles/*" element={ <BoardList item={item} /> }>
                            <Route path=":num" element={ <Detail item={item} setItem={setItem} /> } />
                            <Route path="write" element={ <Write item={item} setItem={setItem} /> } />
                        </Route>
                        <Route path="/todo" element={ <ComplexReducerHook /> } />
                        <Route path="/hello" element={ <HelloReact /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}