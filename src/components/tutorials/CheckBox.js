import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/all";
import styles from '../../scss/tutorial/CheckBox.module.scss';
import classNames from "classnames/bind";

/**
 * CSS Module을 사용할 때 `styles.icon` 과 같이 객체 안에 있는 값을 조회해야 한다.
 * 만약 클래스 이름에 `-`가 들어있다면 다음과 같이 사용해야 한다.
 * - `styles['my-class']`
 *
 * 그리고 여러 스타일이 적용된다면 다음과 같이 사용해야 한다.
 * - `${styles.one} ${styles.two}`
 *
 * 조건부 스타일링을 한다면 더욱 번거롭게 된다.
 * - `${styles.one} ${condition ? styles.two : ''}`
 *
 * 이를 해결하기 위해 classNames 의 bind 기능을 사용하게 되면
 * CSS 클래스 이름을 지정할 때 `cx('CLASS_NAME')`과 같은 형식으로 사용할 수 있다.
 * - `cx('one', 'two')`
 * - `cx('my-component', {condition: true})`
 * - `cx('my-component', ['another', 'classnames'])`
 */
const cx = classNames.bind(styles)

function CheckBox({children, checked, ...rest}) {
    return (
        <div className={cx('checkbox')}>
            <label>
                <input
                    type={"checkbox"}
                    checked={checked}
                    {...rest}
                />
                <div className={cx('icon')}>
                    {/*
                    react-icons 라이브러리 사용
                    https://react-icons.github.io/react-icons/#/
                    */}
                    {checked
                        ? <MdCheckBox
                            className={cx('checked')}
                        />
                        : <MdCheckBoxOutlineBlank
                        />}
                </div>
            </label>
            <span>
                {children}
            </span>
        </div>
    )
}

export default CheckBox