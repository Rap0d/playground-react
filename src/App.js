// import logo from './logo.svg';
import './App.css';
import Hello from "./components/tutorials/Hello";
import Prop from "./components/tutorials/Prop";
import Wrapper from "./components/tutorials/Wrapper";
import Conditional from "./components/tutorials/Conditional";
import Counter from "./components/tutorials/Counter";
import InputSample from "./components/tutorials/InputSample";

function App() {
    const propName = "App's Name"
    const propColor = "red"

    const header = {
        jsx: 'https://react.vlpt.us/basic/04-jsx.html',
        prop: 'https://react.vlpt.us/basic/05-props.html',
        conditionals: 'https://react.vlpt.us/basic/06-conditional-rendering.html',
        state: 'https://react.vlpt.us/basic/07-useState.html',
        input: 'https://react.vlpt.us/basic/08-manage-input.html'
    }

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
            </div>
        </div>
    );
}

export default App;
