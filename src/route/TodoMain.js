import React from "react";
import {TodoProvider} from "../components/todo-list/TodoContext";
import TodoTemplate from "../components/todo-list/TodoTemplate";
import TodoHead from "../components/todo-list/TodoHead";
import TodoList from "../components/todo-list/TodoList";
import TodoCreate from "../components/todo-list/TodoCreate";

function TodoMain() {
    return (
        <div className={'TodoList'}>
            {/*
            Todo관련 Context 들을 사용할 수 있도록,
            TodoProvider를 불러와 모든 내용을 TodoProvider로 감싸준다.
            */}
            <TodoProvider>
                <TodoTemplate>
                    <TodoHead/>
                    <TodoList/>
                    <TodoCreate/>
                </TodoTemplate>
            </TodoProvider>
        </div>
    )
}

export default TodoMain