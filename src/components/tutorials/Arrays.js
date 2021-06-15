import React, {useRef, useState} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

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
            />
        </>
    )
}

export default Arrays