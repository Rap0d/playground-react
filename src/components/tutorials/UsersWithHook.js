import React, {useState} from "react";
import axios from "axios";
// import useAsync from "./useAsync";
import User from "./User";
import {useAsync} from "react-async";

/* useAsync에서는 Promise의 결과를 바로 data에 담기 때문에
 요청을 한 이후 response에서 data 를 추출하여 반환
 */
async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response.data
}

function UsersWithHook() {
    // useState를 사용하여 userId 상태 관리
    // 리스트에 있는 항목을 클릭하면 사용자의 id를 userId로 설정
    const [userId, setUserId] = useState(null)
    // const [state, refetch] = useAsync(getUsers, [], true)
    //
    // // state.data를 users 키워드로 조회
    // const {loading, data: users, error} = state

    /*
    react-async 로 변경
    만약 useAsync 커스텀 훅에서 사용한 skip과 같이
    사용자의 특정 인터렉션에 따라 API를 호출하고 싶을때는
    promiseFn이 아닌 deferFn을 사용하고,
    reaload 대신 run 함수를 사용한다.
     */
    const {data: users, error, isLoading, reload} = useAsync({
        promiseFn: getUsers
    });

    // 로딩중일때 `로딩중..` 텍스트 표시
    if (isLoading) {
        return <div>로딩중..</div>;
    }
    // 에러가 발생했을 때 에러 메시지 표시
    if (error) {
        return <div>에러가 발생했습니다</div>;
    }
    // users가 없으면 아무것도 보여주지 않음
    if (!users) {
        return <button onClick={reload}>Load</button>;
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
            <button onClick={reload}>Reload</button>
            {userId && <User id={userId}/>}
        </>
    )
}

export default UsersWithHook