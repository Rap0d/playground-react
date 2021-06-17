import React from "react";
import '../../scss/Button.scss'
import classNames from "classnames";

/**
 * Custom Button
 *
 * @param children Button Text
 * @param size Button Size
 * @param color Button Color
 * @param outline Outline true / false
 * @param fullWidth width 100% true / false
 * @param rest event, etc..
 * @return {JSX.Element} Button
 * @constructor
 */
function Button(
    {
        children,
        size,
        color,
        outline,
        fullWidth,
        ...rest
    }
) {
    /*
    CSS 클래스 이름을 동적으로 넣어주기 위한 설정
    className={[AAA, BBB].join(' ')}
    혹은 className={`Button ${size}`}
    classNames 라이브러리를 사용한 동적 class 설정
     */

    /*
    ...rest를 사용하면 지정한 props를 제외한 값들을 rest객체에 모아주고
    button 태그에서 {...rest}를 해주면 rest안에 있는 객체값을 모두
    button 태그에 설정을 해준다.
    즉, 어떤 props를 받을 지 확실하지는 않지만
    그대로 다른 컴포넌트 또는 HTML 태그에 전달해주어야하는 상황에 사용
     */
    return <button className={
        classNames(
            'Button',
            size,
            color,
            {outline, fullWidth}
        )
    }
                   {...rest}
    >
        {children}
    </button>
}

Button.defaultProps = {
    // 버튼 크기에 large, medium, samll 설정할 수 있도록 구현
    size: 'medium',
    color: 'blue'
}

export default Button;