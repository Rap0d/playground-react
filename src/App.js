import './scss/App.scss';
import {Link, Route, Switch} from 'react-router-dom'
import Home from "./route/Home";
import About from "./route/About";
import TutorialMain from "./route/TutorialMain";
import TodoMain from "./route/TodoMain";
import Profiles from "./components/tutorials/Profiles";
import HistorySample from "./components/tutorials/HistorySample";
import ReduxMain from "./route/ReduxMain";
import SocketRooms from "./components/socket/SocketRooms";

const App = () => {
    return (
        <div className="App">
            <div className={"App-header"}>
                <h1>React Playground</h1>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/tutorial"}>Tutorial Samples</Link>
                    </li>
                    <li>
                        <Link to={"/todo"}>TodoList</Link>
                    </li>
                    <li>
                        <Link to="/profiles">Profiles</Link>
                    </li>
                    <li>
                        <Link to={"/history"}>History Sample</Link>
                    </li>
                    <li>
                        <Link to={"/redux"}>Redux Sample</Link>
                    </li>
                    <li>
                        <Link to={"/chat"}>Chat Sample</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
                <hr/>
            </div>

            {/*
            Switch는 여러 Route를 감싸
            그 중 규칙이 일치하지 않는 라우트 단 하나만 렌더링
            Switch를 사용하면 아무것도 일치하지 않았을때
            보여줄 Not Found 페이지 구현 가능
            */}
            <Switch>
                {/*
                exact true 옵션을 넣지 않으면 /about 경로에 갈 때도
                / 경로를 요청후, about 을 호출한다.
                */}
                <Route path={"/"} exact={true} component={Home}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/tutorial"} component={TutorialMain}/>
                <Route path={"/todo"} component={TodoMain}/>

                <Route path="/profiles/" component={Profiles}/>
                <Route path={"/history"} component={HistorySample}/>
                <Route path={"/redux"} component={ReduxMain}/>
                <Route path={"/chat"} component={SocketRooms}/>

                <Route
                    // path를 따로 정의하지 않으면 모든 상황에 렌더링
                    render={({location}) => (
                        <div>
                            <h2>No Page</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>

        </div>
    )
}

export default App;
