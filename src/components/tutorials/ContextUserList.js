import React, {useContext} from "react";
import {UserDispatch} from "./ContextApi";

const User = React.memo(function User({user}) {
    // ContextApi에서 정의한 ContextApi 사용
    const dispatch = useContext(UserDispatch)

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'white'
                }}
                onClick={() => {
                    dispatch({type: 'TOGGLE_USER', id: user.id})
                }}
            >{user.username}</b>
            &npsp;
            <span>({user.email})</span>
            <button
                onClick={() => {
                    dispatch({type: 'REMOVE_USER', id: user.id})
                }}
            >Delete
            </button>
        </div>
    );
})

// 정적 배열 렌더링
function UserList({users}) {
    return (
        <>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </>
    )
}

export default React.memo(UserList)