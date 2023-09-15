import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardList, { Detail, Write } from "./components/board/BoardList";

export default function MainApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BoardList /> } />
                <Route path="/write" element={ <Write /> } />
                <Route path="/view/:num" element={ <Detail /> } />
            </Routes>
        </BrowserRouter>
    );
}