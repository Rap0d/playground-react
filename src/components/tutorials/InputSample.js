import React, {useRef, useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nId: ''
    })

    // useRef로 특정 DOM 선택(초기화 하지 않으면 warning 뜸)
    const nameInput = useRef(null)

    const {name, nId} = inputs          // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target  // e.target에서 name, value 추출
        setInputs({
            ...inputs,                  // 기존의 input 객체 복사
            [name]: value               // name 키를 가진 값을 value로 설정
        })
    }

    const onReset = () => {
        console.log('reset')
        setInputs({
            name: '',
            nId: ''
        })

        // 초기화 버튼을 클릭했을 때 name input에 포커스가 잡히도록 구현
        nameInput.current.focus()
    }

    return (
        <>
            {/* ref를 선택해주어야 함 */}
            <input
                placeholder={'Name'}
                name={'name'}
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                placeholder={'nId'}
                name={'nId'}
                onChange={onChange}
                value={nId}
            />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: </b>
                {name} ({nId})
            </div>
        </>
    )
}

export default InputSample