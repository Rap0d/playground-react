import React, {useCallback, useMemo, useRef, useState} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('Count Active Users..')
    return users.filter(user => user.active).length
}

function Arrays({users, setUsers}) {
    const nextId = useRef(4)
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    })
    const {username, email} = inputs

    /*
     useCallback
     특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용
     deps 배열에 있는 개체들이 바뀌지 않으면 함수를 새로 생성하지 않음
     ~= useMemo는 결과 값을 재사용할 때 사용
     */
    const onChange = useCallback(
        e => {
            const {name, value} = e.target
            setInputs(inputs => ({
                ...inputs,
                [name]: value
            }))
        },
        /*
         함수 안에서 사용하는 상태 혹은 props가 있다면 꼭 deps에 포함
         만약 deps 배열에 함수에서 사용하는 값을 넣지 않게 되면,
         함수에서 해당 값들을 참조할 때 최신 값을 사용한다는 보장이 없음
         props 에서 받아온 함수가 있다면 그 또한 deps에 넣어줘야 함
         */
        []
    )
    const onCreate = useCallback(
        () => {
            const user = {
                id: nextId.current,
                username,
                email
            }
            setUsers(users => [...users, user])

            setInputs({
                username: '',
                email: ''
            })
            nextId.current += 1
        },
        [username, email, setUsers]
    )
    const onRemove = useCallback(
        id => {
            // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열 생성
            // = user.id 가 id인 것을 제거
            setUsers(users => users.filter(user => user.id !== id))
        },
        [setUsers]
    )
    const onToggle = useCallback(
        id => {
            setUsers(
                users =>
                    users.map(user =>
                        user.id === id ? {...user, active: !user.active} : user
                    )
            )
        },
        [setUsers]
    )

    /*
    input값이 바뀔때 마다 컴포넌트가 리렌더링 되므로 자원낭비가 됨
    따라서 useMemo 함수를 사용하여 성능 최적화

    - 첫 번째 파라미터: 어떻게 연산할지 정의하는 함수
    - 두 번째 파라미터: deps 배열을 넣어주어 해당 배열의 내용이 바뀌면
        등록한 함수를 호출하여 값을 연산하고,
        내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
     */
    const count = useMemo(
        () => countActiveUsers(users), [users]
    )

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            <div>Users: {count}</div>
        </>
    )
}

export default Arrays