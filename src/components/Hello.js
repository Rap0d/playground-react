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
            <div style={style}>Hello! {name}</div>
            <div className="gray-box">gray</div>
        </>
    )
}

export default Hello;