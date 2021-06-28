import React from "react";
import {Link, NavLink, Route} from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

const Profiles = () => {
    return (
        <div>
            <h3>Users List with Link Class:</h3>
            <ul>
                <li>
                    <Link to={"/profiles/chang"}>chang</Link>
                </li>
                <li>
                    <Link to={"/profiles/hong"}>hong</Link>
                </li>
            </ul>

            <h3>Users List with NavLink Class:</h3>
            {/*
            현재 경로와 Link에서 사용하는 경로가 일치하는 경우
            특정 스타일 혹은 클래스를 적용할 수 있는 컴포넌트

            그 외 기능:
            - Redirect: 페이지 리디렉트
            - Prompt: 이전에 사용했던 history.block의 컴포넌트 버전
            - Route Config: JSX 형태로 라우트를 선언하는 것이 아닌
                Angular나 Vue와 같이 배열 / 객체를 사용하여 라우트 정의
            - Memory Router: 실제 주소는 존재하지 않는 라우터.
                리액트 네이티브나 임베디드 웹앱에서 사용
            - https://reacttraining.com/react-router/web/guides/philosophy
            */}
            <ul>
                <li>
                    <NavLink
                        to={"/profiles/chang"}
                        activeStyle={{background: 'white', color: 'black'}}
                    >chang</NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/profiles/hong"}
                        activeStyle={{background: 'white', color: 'black'}}
                    >hong</NavLink>
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
            <RouterHookSample/>
        </div>
    )
}

export default Profiles