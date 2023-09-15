import { createSlice } from "@reduxjs/toolkit";

export const BoardSlice = createSlice({
    name: "boardSlice",
    initialState: [],
    reducers: {
        regist(state, action) {
            state.push( action.payload )
        },
        read(state, action) {
            state = state.map((board) => {
                if (board.num === parseInt(action.payload)) {
                    return {...board, viewCount: board.viewCount + 1}
                }
                return board
            })
        }
    }
})