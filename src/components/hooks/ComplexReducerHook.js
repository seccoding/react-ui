import { useReducer, useRef } from "react";
import { TodoReducer } from "./reducer/TodoReducer";

export default function ComplexReducerHook() {

    const todoRef = useRef()
    const [todoItems, dispatch] = useReducer(TodoReducer, {
        count: 0,
        todos: [],
        completeTodoCount: 0
    })

    return (
        <div className="todoWrapper">
            <h1>Todo Application</h1>
            <div>{todoItems.count}개의 할 일이 등록되어 있습니다.</div>
            <div>{todoItems.completeTodoCount}개의 할 일이 완료되었습니다.</div>
            <div>{todoItems.count - todoItems.completeTodoCount}개의 미완료된 할일이 남아있습니다.</div>

            <div>
                <input type="text" ref={todoRef} />
                <button onClick={() => dispatch({type: "add-item", payload: todoRef.current.value})}>등록</button>
            </div>

            <div>
                {
                    todoItems.count == 0 ?
                        <div>등록된 할일이 없습니다.</div> : 
                        todoItems.todos.map((value) => 
                            <TodoItem key={value.id}
                                      id={value.id}
                                      item={value.item}
                                      isComplete={value.isComplete}/>
                                      )
                }
            </div>
        </div>
    );

}


function TodoItem( { id, item, isComplete } ) {
    return (
        <div>
            <input type="checkbox" 
                   value={id} 
                   checked={isComplete}
                   />
            <label htmlFor={id}>{item}</label>
            <span>🗑</span>
        </div>
    );
}