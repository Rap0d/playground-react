import React, {useCallback, useMemo, useReducer, useRef} from "react";
import useInputs from "../../hooks/useInputs";
import CreateUser from "./CreateUser";
import ContextUserList from "./ContextUserList";

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
 ContextApi: 프로젝트 안에서 전역적으로 사용할 수 있는 값(상태, 함수, 인스턴스)
 createContext 의 매개변수에는 Context 의 기본값 설정
 Context를 만들면 Contex 안에 Provider 컴포넌트가 들어있는데,
 이 컴포넌트를 통해 Context의 값을 정할 수 있음
 이 컴포넌트를 사용할 때 value 값을 설정
 */

export const UserDispatch = React.createContext(null)

function ContextApi() {
    const [{username, email}, onChange, onReset] = useInputs({
        username: '',
        email: ''
    })
    const [state, dispatch] = useReducer(reducer, initialState)
    const nextId = useRef(4)

    const {users} = state

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        })
        onReset()
        nextId.current++
    }, [email, onReset, username])

    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <ContextUserList
                users={users}
            />
            <div>count: {count}</div>
        </UserDispatch.Provider>
    )
}

export default ContextApi