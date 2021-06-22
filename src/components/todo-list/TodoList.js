import React from "react";
import '../../scss/todo-list/TodoList.scss'
import TodoItem from "./TodoItem";
import {useTodoState} from "./TodoContext";

function TodoList() {
    const todos = useTodoState()

    return (
        <div className={'TodoListBlock'}>
            {/*
            state 조회 및 렌더링
            */}
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
                ))
            }
        </div>
    )
}

export default TodoList