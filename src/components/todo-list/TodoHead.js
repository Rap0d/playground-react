import React from "react";
import '../../scss/todo-list/TodoHead.scss'
import {useTodoState} from "./TodoContext";

function TodoHead() {
    const todos = useTodoState();
    console.log(todos);
    return (
        <div className={'TodoHead'}>
            <h1>2019년 7월 10일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </div>
    )
}

export default TodoHead