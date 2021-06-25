import './scss/App.scss';
import {Link, Route} from 'react-router-dom'
import Home from "./route/Home";
import About from "./route/About";
import TutorialMain from "./route/TutorialMain";
import TodoMain from "./route/TodoMain";

const App = () => {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/tutorial"}>Tutorial Samples</Link>
                </li>
                <li>
                    <Link to={"/todo"}>TodoList</Link>
                </li>

            </ul>

            <hr/>

            {/*
            exact true 옵션을 넣지 않으면 /about 경로에 갈 때도
            / 경로를 요청후, about 을 호출한다.
            */}
            <Route path={"/"} exact={true} component={Home}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/tutorial"} component={TutorialMain}/>
            <Route path={"/todo"} component={TodoMain}/>
        </div>
    )
}

export default App;
