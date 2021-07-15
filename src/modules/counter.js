/*
Action Type
Ducks 패턴을 따를 때 액션 이름에 접두사를 넣는다.
-> 다른 모듈간의 액션 이름이 중복되는 것을 방지할 수 있음
 */

const SET_DIFF = 'counter/SET_DIFF'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

/*
Action 생성 함수
 */
export const setDiff = diff => ({type: SET_DIFF, diff})
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000)
}

export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000)
}

/*
초기 상태 선언
 */
const initialState = {
    number: 0,
    diff: 1
}

/*
Reducer 선언
 */
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state
    }
}