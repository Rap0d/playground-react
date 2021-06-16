// import logo from './logo.svg';
import './App.css';
import Hello from "./components/tutorials/Hello";
import Prop from "./components/tutorials/Prop";
import Wrapper from "./components/tutorials/Wrapper";
import Conditional from "./components/tutorials/Conditional";
import Counter from "./components/tutorials/Counter";
import InputSample from "./components/tutorials/InputSample";
import Arrays from "./components/tutorials/Arrays";
import {useState} from "react";
import UseReducer from "./components/tutorials/UseReducer";
import ContextApi from "./components/tutorials/ContextApi";

function App() {
    const header = {
        jsx: 'https://react.vlpt.us/basic/04-jsx.html',
        prop: 'https://react.vlpt.us/basic/05-props.html',
        conditionals: 'https://react.vlpt.us/basic/06-conditional-rendering.html',
        state: 'https://react.vlpt.us/basic/07-useState.html',
        input: 'https://react.vlpt.us/basic/08-manage-input.html',
        array: 'https://react.vlpt.us/basic/11-render-array.html',
        arrays: 'https://react.vlpt.us/basic/12-variable-with-useRef.html',
        reduce: 'https://react.vlpt.us/basic/20-useReducer.html'
    }

    const propName = "App's Name"
    const propColor = "red"
    const [propUsers, setUsers] = useState([
        {
            id: 1,
            username: 'kim',
            email: 'aaa@bbb.com',
            active: true
        },
        {
            id: 2,
            username: 'lee',
            email: 'ccc@ddd.com',
            active: false
        },
        {
            id: 3,
            username: 'park',
            email: 'eee@fff.com',
            active: false
        }
    ])

    return (
        <div className="App">
            <div className="Container">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React
                        </a> Playground
                    </h1>

                    <hr/>
                </header>
                <h2>
                    <a
                        className="App-link"
                        href={header.jsx}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        1. JSX Practice
                    </a>
                </h2>
                <Hello/>
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.prop}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        2. Prop Practice
                    </a>
                </h2>
                <Prop
                    name={propName}
                    color={propColor}
                />
                <hr/>
                <Wrapper>
                    <Prop
                        name={propName}
                        color={propColor}
                    />
                    <Prop name={propName}/>
                </Wrapper>
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.conditionals}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        3. 조건부 렌더링 Practice
                    </a>
                </h2>
                <Wrapper>
                    <Conditional
                        name={'REACT'}
                        isSpecial={true}
                    />
                    {/*true 생략 가능*/}
                    <Conditional
                        name={'REACT'}
                        isSpecial
                    />
                    <Conditional/>
                </Wrapper>
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.state}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        4. useState를 통해 컴포넌트에서 바뀌는 값 관리하기
                    </a>
                </h2>
                <Counter/>
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.input}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        5. input 상태 관리하기
                    </a>
                </h2>
                <InputSample/>
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.arrays}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        6. 배열 렌더링, 추가, 수정 및 삭제
                    </a>
                </h2>
                <Arrays
                    users={propUsers}
                    setUsers={setUsers}
                />
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.reduce}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        7. Reducer를 사용한 상태 변화
                    </a>
                </h2>
                <UseReducer
                />
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={header.reduce}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        8. ContextApi를 이용한 전역 값 관리
                    </a>
                </h2>
                <ContextApi
                />
            </div>
        </div>
    );
}

export default App;
