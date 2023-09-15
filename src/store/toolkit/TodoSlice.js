import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        count: 0,
        todos: [],
        completeTodoCount: 0
    },
    reducers: {
        addItem(state, action) {
            state.count += 1
            state.todos.push( {
                id: Date.now(),
                item: action.payload.item,
                isComplete: false
            } )
            state.completeTodoCount = state.todos
                                           .filter(todo => todo.isComplete)
                                           .length
        },
        deleteItem(state, action) {
            state.count -= 1
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            state.completeTodoCount = state.todos
                                           .filter(todo => todo.isComplete)
                                           .length
        },
        complete(state, action) {
            state.todos = state.todos.map(todo => {
                if ( todo.id === action.payload) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
            state.completeTodoCount = state.todos
                                           .filter(todo => todo.isComplete)
                                           .length
        }
    }
})
