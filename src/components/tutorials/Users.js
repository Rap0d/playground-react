import React, {useEffect, useReducer} from "react";
import axios from "axios";

/**
 * useState대신 useReducer로 구현한 API
 * useState의 setState 함수를 여러번 사용하지 않아도 됨
 * 리듀서로 로직을 분리하여 다른 곳에서도 쉽게 재사용 가능
 *
 * @param state
 * @param action
 * @return {{data: null, loading: boolean, error}|{data: null, loading: boolean, error: null}|{data, loading: boolean, error: null}}
 */
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            }
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

function Users() {
    // const [users, setUsers] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    })

    /*
    useEffect에 첫 번째 파라미터로 등록하는 함수에는 aync를 사용할 수 없음
    따라서 함수 내부에서 async를 사용하는 새로운 함수 선언 필요
     */
    const fetchUsers = async () => {
        dispatch({type: 'LOADING'})
        try {
            // 요청이 시작될 때 error, users 초기화
            // setError(null)
            // setUsers(null)
            // loading 상태 true
            // setLoading(true)

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            // setUsers(response.data)
            dispatch({type: 'SUCCESS', data: response.data})
        } catch (e) {
            // setError(e)
            dispatch({type: 'ERROR', error: e})
        }
        // setLoading(false)
    }

    useEffect(() => {
        fetchUsers().then(r => console.log(r))
    }, [])

    // state.data를 users 키워드로 조회
    const {loading, data: users, error} = state

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
        return null;
    }

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={fetchUsers}>Reload</button>
        </>
    )
}

export default Users