import React from "react";
import style from '../../scss/Box.module.scss'

/**
 * CSS Module 에서 가져올 때 style.Box 와 같이 style 객체 내부 값을 참조
 * ex) Box_Box__15-j2
 * 이와 같이 클래스 이름에 대해 고유 이름이 만들어지기 때문에
 * 실수로 CSS 클래스이름이 다른 관계 없는 곳에서 사용한
 * CSS 클래스 이름과 중복되는 일에 대해 걱정할 필요가 없다.
 *
 * 이 기술은 다음과 같은 상황에 유용하다.
 * - 레거시 프로젝트에 리액트를 도입할 때
 * CSS 클래스를 중복되지 않게 작성하기 위해 CSS 클래스 이름을 짓기 귀찮을 때
 *
 * 일반적인 CSS 클래스 네이밍 규칙
 * 컴포넌트의 이름은 다른 컴포넌트랑 중복되지 않게 한다.
 * 컴포넌트의 최상단 CSS 클래스는 컴포넌트의 이름과 일치시킨다.
 *  - (예: .Button)
 * 컴포넌트 내부에서 보여지는 CSS 클래스는 CSS Selector 를 잘 활용한다.
 *  - (예: .MyForm .my-input)
 */
function CssModuleSample() {
    return <div className={style.Box}>{style.Box}</div>
}

export default CssModuleSample