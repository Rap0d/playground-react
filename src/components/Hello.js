import React from "react";
import '../scss/Hello.scss'

function Hello() {
    const name = 'React';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return (
        <>
            <h4>- JSX안에 자바스크립트 값 사용하기</h4>
            <div style={style}>Hello! {name}</div>
            <br/>
            <h4>- SCSS import하여 사용하기</h4>
            <div className="gray-box">gray</div>
        </>
    )
}

export default Hello;