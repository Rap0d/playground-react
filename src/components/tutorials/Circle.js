import React from "react";
import styled, {css} from "styled-components";

/**
 * styled-components를 사용한 컴포넌트
 *
 * @return {JSX.Element}
 * @constructor
 */
function Circle() {
    // div를 스타일 하고 싶으면 styled.div, input은 styled.input과 같이 작성
    // 여러줄의 CSS코드를 조건부로 보여주고 싶으면 css 사용
    const Circle = styled.div
        `
        width: 5rem;
        height: 5rem;
        background: ${props => props.color || 'black'};
        border-radius: 50%;
        ${props =>
            props.huge &&
            css`
                width: 10rem;
                height: 10rem;
                `
        }
    `

    return (
        <div>
            <Circle/>
            <Circle color={"blue"}/>
            <Circle color={"red"} huge/>
        </div>
    )
}

export default Circle