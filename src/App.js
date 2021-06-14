// import logo from './logo.svg';
import './App.css';
import Hello from "./components/tutorials/Hello";
import Prop from "./components/tutorials/Prop";
import Wrapper from "./components/tutorials/Wrapper";
import Conditional from "./components/tutorials/Conditional";

function App() {
    const propName = "App's Name"
    const propColor = "red"

    const header = {
        jsx: 'https://react.vlpt.us/basic/04-jsx.html',
        prop: 'https://react.vlpt.us/basic/05-props.html'
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
                        href={header.prop}
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
            </div>
        </div>
    );
}

export default App;
