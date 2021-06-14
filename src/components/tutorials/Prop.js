import React from "react";
import '../../scss/Hello.scss'

// 비구조화 할당을 이용한 prop값 가져오기(구조 분해)
function Prop({name, color}) {
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem',
        width: '100px'
    }
    return (
        <>
            <h4>- prop 값 가져오기</h4>
            <div style={style}>Prop: {name}</div>

            <h4>- prop에서 가져온 값으로 color 설정하기</h4>
            <div style={{color: color}}>Prop's color</div>
        </>
    )
}

Prop.defaultProps = {
    name: 'unknown',
    color: 'skyblue'
}

export default Prop;