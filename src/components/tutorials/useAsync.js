import {useEffect, useReducer} from "react";

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

/**
 * useAsync 함수는 두 가지 파라미터를 받아온다.
 *
 *
 * @param callback API 요청을 시작하는 함수
 * @param deps 해당 함수 안에서 사용하는 useEffect의 deps.
 * deps 는 비동기함수에서 파라미터가 필요하고,
 * 그 파라미터가 바뀔 때 새로운 데이터를 불러오고 싶은 경우에 활용할 수 있다.
 * 기본값이 []이므로 컴포넌트가 가장 처음 렌더링할때만 API를 호출
 * @param skip 이 값이 true라면 useEffect에서 아무 작업도 하지 않음
 * @return {(*|(function(): Promise<void>))[]} 요청관련 상태와 fetchData 함수.
 * fetchData 함수를 반환하여 나중에 데이터를 쉽게 리로딩할 수 있다.
 */
function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    })

    const fetchData = async () => {
        dispatch({type: 'LOADING'})

        try {
            const data = await callback()
            dispatch({type: 'SUCCESS', data})

        } catch (e) {
            dispatch({type: 'ERROR', error: e})
        }
    }

    useEffect(() => {
        if (skip) {
            return
        }

        fetchData().then(r => console.log(r))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
    return [state, fetchData]
}

export default useAsync