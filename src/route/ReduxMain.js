import React from "react";
import CounterContainer from "../containers/redux-sample/CounterContainer";
import TodosContainer from "../containers/redux-sample/TodosContainer";

const ReduxMain = () => {
    return (
        <>
            <CounterContainer
            />
            <hr/>
            <TodosContainer
            />
        </>
    )
}
export default ReduxMain