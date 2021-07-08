import React from 'react'

/*
Presentational Component
Redux Store에 직접 접근하지 않고 필요한 값, 함수를 props로 받아와 사용하는 컴포넌트
주로 UI를 선언하는 것에 집중한다.
 */
function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10))
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input
                    type={number}
                    value={diff}
                    min={"1"}
                    onChange={onChange}
                />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter