import React, {useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nId: ''
    })

    const {name, nId} = inputs

    const onChange = (e) => {
        const {value, name} = e.target
        console.log(value)
        console.log(name)
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        console.log('reset')
        setInputs({
            name: '',
            nId: ''
        })
    }

    return (
        <>
            <input
                placeholder={'Name'}
                name={'name'}
                onChange={onChange}
                value={name}/>
            <input
                placeholder={'nId'}
                name={'nId'}
                onChange={onChange}
                value={nId}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: </b>
                {name} ({nId})
            </div>
        </>
    )
}

export default InputSample