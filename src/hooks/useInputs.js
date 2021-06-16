import {useCallback, useState} from "react";

/*
커스텀 Hooks
반복되는 로직을 쉽게 재사용
보통 use 키워드로 시작하는 파일을 만들고 그 안에 함수 작성
useState, useEffect, useReducer, useCallback 등 Hooks를 사용하여 원하는 기능 구현
컴포넌트에서 사용하고 싶은 값 반환
 */
function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm)

    // input onChange event
    const onChange = useCallback(e => {
        const {name, value} = e.target
        setForm(form => ({
            ...form, [name]: value
        }))
    }, [])

    // input reset
    const reset = useCallback(() =>
        setForm(initialForm), [initialForm]
    )
    return [form, onChange, reset]
}

export default useInputs