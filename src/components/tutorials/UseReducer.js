import React, {useCallback, useMemo, useReducer, useRef} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
    console.log('Count Users..')
    return users.filter(user => user.active).length
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'kim',
            email: 'aaa@bbb.com',
            active: true
        },
        {
            id: 2,
            username: 'lee',
            email: 'ccc@ddd.com',
            active: false
        },
        {
            id: 3,
            username: 'park',
            email: 'eee@fff.com',
            active: false
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(
                    user =>
                        user.id === action.id
                            ? {...user, active: !user.active}
                            : user)
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(
                    user => user.id !== action.id
                )
            }
        default:
            return state
    }
}

/*
useReducer vs useState
컴포넌트에서 관리하는 값이 하나고, 그 값이 단순한 숫자, 문자열, boolean 값이라면
useState가 편하다.
- const [value, setValue] = useState(true)

컴포넌트에서 관리하는 값이 여러개가 되어 상태의 구조가 복잡해진다면
useReducer로 관리하는 것이 편하다.

 */

/**
 * reducer 를 사용하기 위한 컴포넌트
 * @return {JSX.Element}
 * @constructor
 */
function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const nextId = useRef(4)

    const {users} = state
    const {username, email} = state.inputs

    const onChange = useCallback(e => {
        const {name, value} = e.target
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, [])

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        })
        nextId.current++
    }, [username, email])

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    }, [])

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    }, [])

    const count = useMemo(() => countActiveUsers(users), [users])

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
                onToggle={onToggle}
                onRemove={onRemove}
            />
            <div>Active: {count}</div>
        </>
    )
}

export default UseReducer