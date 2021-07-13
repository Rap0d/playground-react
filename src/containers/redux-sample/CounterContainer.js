import React from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {decrease, increase, setDiff} from "../../modules/counter";
import Counter from "../../components/redux-sample/Counter";

function CounterContainer() {
    /*
    useSelector: redux store의 상태를 조회하는 Hook
    state의 값은 `store.getState()` 함수를 호출했을 때 나타나는 결과물과 동일

    useSelector의 두 번째 파라미터는 equalityFn
    -> `equalityFn?: (left: any, right: any) => boolean`
    이전 값과 다음 값을 비교하여 true가 나오면 리렌더링을 하지 않고
    false가 나오면 리렌더링을 한다
    `shallowEqual`은 `react-redux` 내장함수로, 객체 안의 가장 겉 값들을 모두 비교
     */
    const {number, diff} = useSelector(state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }), shallowEqual
    )

    const dispatch = useDispatch()

    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))

    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer