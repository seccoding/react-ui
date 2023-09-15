import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoSlice } from "../../store/toolkit/TodoSlice";

export default function ComplexReducerHook() {

    const todoRef = useRef()
    const todoItems = useSelector(state => state.todo)
    const dispatch = useDispatch()

    return (
        <div className="todoWrapper">
            <h1>Todo Application</h1>
            <div>{todoItems.count}개의 할 일이 등록되어 있습니다.</div>
            <div>{todoItems.completeTodoCount}개의 할 일이 완료되었습니다.</div>
            <div>{todoItems.count - todoItems.completeTodoCount}개의 미완료된 할일이 남아있습니다.</div>

            <div>
                <input type="text" ref={todoRef} />
                <button onClick={() => {
                    dispatch(TodoSlice.actions.addItem({item : todoRef.current.value}))
                    todoRef.current.value = ""
                    todoRef.current.focus()
                }}>등록</button>
            </div>

            <div>
                {
                    todoItems.count == 0 ?
                        <div>등록된 할일이 없습니다.</div> : 
                        todoItems.todos.map((value) => 
                            <TodoItem key={value.id}
                                      id={value.id}
                                      item={value.item}
                                      isComplete={value.isComplete} />)
                }
            </div>
        </div>
    );

}


function TodoItem( { id, item, isComplete } ) {

    const itemStyle = {
        color: !isComplete ? "#333" : "#CCC",
        textDecoration: !isComplete ? "none" : "line-through"
    }

    const dispatch = useDispatch()

    return (
        <div>
            <input type="checkbox" 
                   value={id} 
                   id={id}
                   checked={isComplete}
                   onChange={() => dispatch(TodoSlice.actions.complete(id))}
                   />
            <label htmlFor={id} style={itemStyle}>{item}</label>
            <span onClick={() => dispatch(TodoSlice.actions.deleteItem(id))}>🗑</span>
        </div>
    );
}