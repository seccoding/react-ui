import { configureStore } from "@reduxjs/toolkit";
import { BoardSlice } from "./BoardSlice";
import { TodoSlice } from "./TodoSlice";

export const ToolkitStore = configureStore({
    reducer: {
        board: BoardSlice.reducer,
        todo: TodoSlice.reducer
    }
})