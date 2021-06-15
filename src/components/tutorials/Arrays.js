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

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={propUsers}/>
        </>
    )
}

export default Arrays