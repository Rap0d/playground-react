import React from "react";
import {Link, Route} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

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
            ** 서브라우트 **
            라우트 내부의 라우트를 만드는 것을 의미
            특정 라우트 내에 탭을 만들 때 state로 관리하는 것이 아닌
            서브 라우트로 관리하는 것이 좋음

            setState를 할 필요없고, 링크를 통해 다른 곳으로 진입시킬 수 있음
            검색엔진 크롤링을 고려한다면 검색엔진 봇이 데이터를 수집하는데 용이

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

            <WithRouterSample/>
        </div>
    )
}

export default Profiles