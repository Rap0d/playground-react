import React, {useState} from "react";

function Counter() {
    // useState: 컴포넌트에서 상태를 관리하기 위한 함수
    // 첫 번째 원소는 현재 상태, 두 번째 원소는 Setter 함수
    // 배열 비구조화 할당
    /*
        const numberState = useState(0);
        const number = numberState[0];
        const setNumber = numberState[1];
     */
    const [number, setNumber] = useState(0)
    const onIncrease = () => {
        // 함수형 업데이트 (컴포넌트 최적화)
        setNumber(prevNumber => prevNumber + 1)
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}

export default Counter;
