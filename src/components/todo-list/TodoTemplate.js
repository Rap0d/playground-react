import React from "react";
import '../../scss/todo-list/TodoTemplate.scss'

function TodoTemplate({children}) {
    return (
        <div className={'TodoTemplateBlock'}>
            {children}
        </div>
    )
}

export default TodoTemplate