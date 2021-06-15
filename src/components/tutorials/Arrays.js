import React, {useMemo, useRef, useState} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('Count Active Users..')
    return users.filter(user => user.active).length
}

function Arrays({propUsers, setUsers}) {
    const nextId = useRef(4)
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    })
    const {username, email} = inputs

    const onChange = e => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        }
        setUsers([
            ...propUsers,
            user
        ])

        setInputs({
            username: '',
            email: ''
        })
        nextId.current += 1
    }
    const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열 생성
        // = user.id 가 id인 것을 제거
        setUsers(propUsers.filter(user => user.id !== id))
    }
    const onToggle = id => {
        setUsers(
            propUsers.map(user =>
                user.id === id ? {...user, active: !user.active} : user
            )
        )
    }

    /*
    input값이 바뀔때 마다 컴포넌트가 리렌더링 되므로 자원낭비가 됨
    따라서 useMemo 함수를 사용하여 성능 최적화

    - 첫 번째 파라미터: 어떻게 연산할지 정의하는 함수
    - 두 번째 파라미터: deps 배열을 넣어주어 해당 배열의 내용이 바뀌면
        등록한 함수를 호출하여 값을 연산하고,
        내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
     */
    const count = useMemo(
        () => countActiveUsers(propUsers), [propUsers]
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
                users={propUsers}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            <div>Users: {count}</div>
        </>
    )
}

export default Arrays