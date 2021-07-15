import React from "react";
import CounterContainer from "../containers/redux-sample/CounterContainer";
import TodosContainer from "../containers/redux-sample/TodosContainer";
import PostListContainer from "../containers/redux-sample/PostListContainer";

const ReduxMain = () => {
    return (
        <>
            <CounterContainer
            />
            <hr/>
            <TodosContainer
            />
            <hr/>
            <PostListContainer/>
        </>
    )
}
export default ReduxMain