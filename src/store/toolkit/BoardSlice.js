import { createSlice } from "@reduxjs/toolkit";

export const BoardSlice = createSlice({
    name: "boardSlice",
    initialState: [],
    reducers: {
        regist(state, action) {
            state.push( action.payload )
        },
        read(state, action) {
            state.forEach((board) => {
                if (board.num === parseInt(action.payload)) {
                    board.viewCount += 1
                }
            })
        }
    }
})