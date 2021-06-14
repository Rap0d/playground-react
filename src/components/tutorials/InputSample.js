import React, {useState} from "react";

function InputSample() {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: {text}</b>
            </div>
        </>
    )
}

export default InputSample;