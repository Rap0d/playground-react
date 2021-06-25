import './scss/App.scss';
import {Link, Route} from 'react-router-dom'
import Home from "./route/Home";
import About from "./route/About";
import TutorialMain from "./route/TutorialMain";
import TodoMain from "./route/TodoMain";
import Profiles from "./components/tutorials/Profiles";

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
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
                <hr/>
            </div>

            {/*
            exact true 옵션을 넣지 않으면 /about 경로에 갈 때도
            / 경로를 요청후, about 을 호출한다.
            */}
            <Route path={"/"} exact={true} component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/tutorial"} component={TutorialMain}/>
            <Route path={"/todo"} component={TodoMain}/>

            <Route path="/profiles/" component={Profiles}/>
        </div>
    )
}

export default App;
