export const TodoReducer = function(state, action) {

    const type = action.type
    if (type == "add-item") {
        const newTodoItem = {
            id: Date.now(),
            item: action.payload, // TODO 명
            isComplete: false
        }

        return {
            count: state.count + 1,
            todos: [...state.todos, newTodoItem],
            completeTodoCount: state
                                 .todos
                                 .filter( (item) => item.isComplete )
                                 .length
        }
    }
    else if (type == "delete-item") {
        const items = {
            count: state.count - 1,
            todos: state.todos.filter((todo) => todo.id != action.payload)
        }

        return {
            ...items, 
            completeTodoCount: items
                                 .todos
                                 .filter((todo) => todo.isComplete)
                                 .length
        }
    }
    else if (type == "complete") {
        const items = {
            count: state.count,
            todos: state.todos.map((item) => {
                if (item.id == action.payload) {
                    return {...item, isComplete: !item.isComplete}
                }
                return item
            })
        }

        return {
            ...items, 
            completeTodoCount: items
                                 .todos
                                 .filter((todo) => todo.isComplete)
                                 .length
        }
    }
    else {
        return state
    }

}