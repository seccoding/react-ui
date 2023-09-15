import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList, { Detail, Write } from "./components/board/BoardList";
import { useState } from "react";

export default function MainApp() {

    const [item, setItem] = useState([])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BoardList item={item} /> } />
                <Route path="/write" element={ <Write item={item} setItem={setItem} /> } />
                <Route path="/view/:num" element={ <Detail item={item} setItem={setItem} /> } />
            </Routes>
        </BrowserRouter>
    );
}