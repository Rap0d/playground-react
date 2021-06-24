import React, {useState} from "react";
import {getUsers, useUsersDispatch, useUsersState} from "./UsersContext";
import UserWithContext from "./UserWithContext";

function UsersWithContext() {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {data: users, loading, error} = state.users;
    const fetchData = () => {
        getUsers(dispatch).then(r => console.log(r));
    };

    // 로딩중일때 `로딩중..` 텍스트 표시
    if (loading) {
        return <div>로딩중..</div>;
    }
    // 에러가 발생했을 때 에러 메시지 표시
    if (error) {
        return <div>에러가 발생했습니다</div>;
    }
    // users가 없으면 아무것도 보여주지 않음
    if (!users) {
        return <button onClick={fetchData}>불러오기</button>;
    }

    return (
        <>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{cursor: "pointer"}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>Reload</button>
            {userId && <UserWithContext id={userId}/>}
        </>
    )
}

export default UsersWithContext