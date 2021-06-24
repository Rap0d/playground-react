// import logo from './logo.svg';
import './scss/App.scss';
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
import ImmerSample from "./components/tutorials/ImmerSample";
import HelloWithClass from "./components/tutorials/HelloWithClass";
import CounterWithClass from "./components/tutorials/CounterWithClass";
import Button from "./components/tutorials/Button";
import CssModuleSample from "./components/tutorials/CssModuleSample";
import CheckBox from "./components/tutorials/CheckBox";
import Circle from "./components/tutorials/Circle";
import Dialog from "./components/tutorials/Dialog";
import TodoTemplate from "./components/todo-list/TodoTemplate";
import TodoHead from "./components/todo-list/TodoHead";
import TodoList from "./components/todo-list/TodoList";
import TodoCreate from "./components/todo-list/TodoCreate";
import {TodoProvider} from "./components/todo-list/TodoContext";
import Users from "./components/tutorials/Users";

function App() {
    const tutoHeader = {
        jsx: 'https://react.vlpt.us/basic/04-jsx.html',
        prop: 'https://react.vlpt.us/basic/05-props.html',
        conditionals: 'https://react.vlpt.us/basic/06-conditional-rendering.html',
        state: 'https://react.vlpt.us/basic/07-useState.html',
        input: 'https://react.vlpt.us/basic/08-manage-input.html',
        array: 'https://react.vlpt.us/basic/11-render-array.html',
        arrays: 'https://react.vlpt.us/basic/12-variable-with-useRef.html',
        reduce: 'https://react.vlpt.us/basic/20-useReducer.html',
        immer: 'https://react.vlpt.us/basic/23-immer.html',
        classComponent: 'https://react.vlpt.us/basic/24-class-component.html'
    }

    const styleHeader = {
        sass: 'https://react.vlpt.us/styling/01-sass.html',
        cssModule: 'https://react.vlpt.us/styling/02-css-module.html'
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

    const [check, setCheck] = useState(false)
    const onChange = e => {
        setCheck(e.target.checked)
    }

    const [dialog, setDialog] = useState(false)
    const onClick = () => {
        setDialog(true)
    }
    const onConfirm = () => {
        console.log('confirm')
        setDialog(false)
    }
    const onCancel = () => {
        console.log('cancel')
        setDialog(false)
    }

    return (
        <div className="App">
            <div className="Container-tutorial">
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
                        href={tutoHeader.jsx}
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
                        href={tutoHeader.prop}
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
                        href={tutoHeader.conditionals}
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
                        href={tutoHeader.state}
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
                        href={tutoHeader.input}
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
                        href={tutoHeader.arrays}
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
                        href={tutoHeader.reduce}
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
                        href={tutoHeader.reduce}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        8. ContextApi를 이용한 전역 값 관리
                    </a>
                </h2>
                <ContextApi
                />
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={tutoHeader.immer}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        9. Immer를 사용한 쉬운 배열의 불변성 유지 및 관리
                    </a>
                </h2>
                <ImmerSample
                />
                <hr/>
                <h2>
                    <a
                        className="App-link"
                        href={tutoHeader.classComponent}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        10. 클래스형 컴포넌트
                    </a>
                </h2>
                <HelloWithClass
                />
                <CounterWithClass
                />
                <hr/>
                <h1><a
                    className="App-link"
                    href={styleHeader.sass}
                    target="_blank"
                    rel="noopener noreferrer"
                >Style Sample
                </a></h1>
                <div className={"sassTest"}>
                    <div>
                        <Button
                            size={'large'}
                            onClick={() => alert('Click!')}
                        >Button</Button>
                        <Button>Button</Button>
                        <Button size={'small'}>Button</Button>
                    </div>

                    <hr/>

                    <div>
                        <Button size={'large'} color={'pink'}>Button</Button>
                        <Button color={'pink'}>Button</Button>
                        <Button size={'small'} color={'pink'}>Button</Button>
                    </div>

                    <hr/>

                    <div>
                        <Button size={'large'} color={'gray'}>Button</Button>
                        <Button color={'gray'}>Button</Button>
                        <Button size={'small'} color={'gray'}>Button</Button>
                    </div>

                    <hr/>

                    <div>
                        <Button size={'large'} outline>Button</Button>
                        <Button color={'gray'} outline>Button</Button>
                        <Button size={'small'} color={'pink'}
                                outline>Button</Button>
                    </div>

                    <hr/>

                    <>
                        <Button fullWidth>Button</Button>
                        <Button color={'gray'} fullWidth>Button</Button>
                        <Button
                            color={'pink'}
                            onClick={onClick}
                            fullWidth
                        >Delete</Button>
                    </>
                </div>

                <hr/>
                <h1><a
                    className="App-link"
                    href={styleHeader.cssModule}
                    target="_blank"
                    rel="noopener noreferrer"
                >CSS Module
                </a></h1>
                <div className={'sassTest'}>
                    <CssModuleSample/>

                    <hr/>

                    <CheckBox
                        onChange={onChange}
                        checked={check}
                    >
                        다음 약관에 모두 동의
                    </CheckBox>
                    <p>
                        <b>check: </b>
                        {check ? 'true' : 'false'}
                    </p>
                </div>

                <hr/>
                <h1><a
                    className="App-link"
                    href={styleHeader.cssModule}
                    target="_blank"
                    rel="noopener noreferrer"
                >Styled Components
                </a></h1>
                <div className={'sassTest'}>
                    <Circle/>
                </div>
                <hr/>
                <Dialog
                    title={"Are you sure?"}
                    confirmText={"Delete"}
                    cancelText={"Cancel"}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    visible={dialog}
                >
                    Delete Data?
                </Dialog>
            </div>
            <div className={'TodoList'}>
                {/*
            Todo관련 Context 들을 사용할 수 있도록,
            TodoProvider를 불러와 모든 내용을 TodoProvider로 감싸준다.
            */}
                <TodoProvider>
                    <TodoTemplate>
                        <TodoHead/>
                        <TodoList/>
                        <TodoCreate/>
                    </TodoTemplate>
                </TodoProvider>
            </div>
            <div className={'ApiSamples'}>
                <Users>

                </Users>
            </div>
        </div>
    )
}

export default App;
