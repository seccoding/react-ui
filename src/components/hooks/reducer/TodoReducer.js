export const TodoReducer = function(state, action) {

    const type = action.type
    if (type == "add-item") {
        const newTodoItem = {
            id: Date.now(),
            item: action.payload, // TODO 명
            iscomplete: false
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

    }
    else if (type == "complete") {

    }
    else {
        return state
    }

}