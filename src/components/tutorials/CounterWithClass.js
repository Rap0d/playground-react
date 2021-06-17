import React, {Component} from "react";

class CounterWithClass extends Component {
    // CRA로 작성된 프로젝트에서 state 사용할때는 그냥 바깥에 선언하면 된다.
    /*
    state = {
        counter: 0
    }
     */

    // 클래스 내부 메서드에서 this를 가리킬 때 undefined가 되는 문제 해결
    // 1. bind 작업
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this)

        /* 클래스형 컴포넌트에서 상태를 관리할 때 state를 사용
         constructor 내부에서 this.state를 설정
         클래스형 컴포넌트의 state는 무조건 객체 형태여야 함
         render() 메서드에서 state를 조회하려면 this.state로 조회
        */
        this.state = {
            counter: 0,
            fixed: 1
        }
    }

    // 클래스에서 커스텀 메서드를 만들게 될 때에는 보통 이름을 handle..으로 함
    handleIncrease() {
        console.log('increase')
        console.log(this)
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // 2. 클래스 내부 메서드를 선언할 때 화살표 함수 문법을 사용하여 작성
    // class-properties 문법: 클래스에 특정 속성을 선언
    // CRA(create react app)로 만든 프로젝트에는 적용이 되어 있는 문법
    handleDecrease = () => {
        console.log('decrease')
        console.log(this)

        /*
         함수형 업데이트도 가능
         보통 한 함수에서 setState를 여러번에 걸쳐서 해야하는 경우에 유용
         */
        this.setState(state => ({
            counter: state.counter - 1
        }))

        // 상태가 업데이트 되고 난 후 콜백함수를 실행
        // 함수형 업데이트가 아니라서 -1이 한번만된다 !
        // 성능을 위해 비동기처리가 되기 때문
        this.setState({
                counter: this.state.counter - 1
            }, () => {
                console.log(this.state.counter)
            }
        )
    }

    render() {
        return (
            <>
                {/*
                */}
                <h1>{this.state.counter}</h1>
                <button
                    onClick={this.handleIncrease}
                >+1
                </button>
                <button
                    onClick={this.handleDecrease}
                >-1
                </button>
                <p>Fixed: {this.state.fixed}</p>
            </>
        )
    }
}

export default CounterWithClass;
