import React, {useMemo, useReducer} from "react";
import produce from "immer";
import CreateUser from "./CreateUser";
import ImmerUserList from "./ImmerUserList";

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
            return produce(state, draft => {
                draft.users.push(action.user)
            })
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id)
                user.active = !user.active
            })
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(
                    user => user.id === action.id
                )
                draft.users.splice(index, 1)
            })
        default:
            return state
    }
}

export const UserDispatch = React.createContext(null);

function ImmerSample() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {users} = state;

    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser/>
            <ImmerUserList users={users}/>
            <div>Count: {count}</div>
        </UserDispatch.Provider>
    )
}

export default ImmerSample