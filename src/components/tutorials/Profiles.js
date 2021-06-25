import React from "react";
import {Link, Route} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>Users:</h3>
            <ul>
                <li>
                    <Link to={"/profiles/chang"}>chang</Link>
                </li>
                <li>
                    <Link to={"/profiles/hong"}>hong</Link>
                </li>
            </ul>

            {/*
            component 대신 render를 사용하여 컴포넌트가 아닌 JSX 렌더링
            */}
            <Route
                path={"/profiles"}
                exact
                render={() => <div>Select User</div>}
            />
            {/*
            path 규칙에 :username 을 넣어주면 username에 해당하는 값을
            파라미터로 넣어주어 Profile 컴포넌트에서 match props를 통해
            전달받을 수 있게 된다.
            */}
            <Route path={"/profiles/:username"} component={Profile}/>
        </div>
    )
}

export default Profiles