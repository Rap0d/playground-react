import React, {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addTodo, toggleTodo} from "../../modules/todos";
import Todos from "../../components/redux-sample/Todos";

function TodosContainer() {
    // useSelector에서 꼭 객체를 반환할 필요는 없음
    // 한 종류의 값을 조회하고 싶으면 원하는 값만 반환
    const todos = useSelector((state => state.todos))
    const dispatch = useDispatch()

    const onCreate = text => dispatch(addTodo(text))

    // 최적화를 위한 useCallback 사용
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch])

    return (
        <Todos
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    )
}

export default TodosContainer