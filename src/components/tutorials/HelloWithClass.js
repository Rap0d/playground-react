import React, {Component} from "react";
import '../../scss/Hello.scss'

class HelloWithClass extends Component {
    static defaultProps = {
        name: 'unknown'
    }

    render() {
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
            </>
        )
    }
}

/*
    // 클래스 내부에서 static으로 선언할 수 있음
    HelloWithClass.defaultProps = {
        name: 'unknown'
    }
*/

export default HelloWithClass