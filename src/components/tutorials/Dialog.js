import React, {useEffect, useState} from 'react';
import styled, {css, keyframes} from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  
    ${props => props.disappear && css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: black;
  }
  p {
    font-size: 1.125rem;
    color: black;
  }
  
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  
    ${props => props.disappear && css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({
    title,
    children,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    visible
}) {
    // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태를 의미하는 animate
    const [animate, setAnimate] = useState(false);
    // 실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 localVisible
    const [localVisible, setLocalVisible] = useState(visible);

    // visible값이 true에서 false로 바뀌는 시점을 감지
    // animate = true, setTimeout을 이용하여 250ms 후 false 처리
    useEffect(() => {
        // visible 값이 true -> false 가 되는 것을 감지
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [localVisible, visible]);

    // !visible 일때 null을 반환하는 것이 아닌
    // !animate && !localVisible 조건에서 null 반환
    if (!animate && !localVisible) {
        return null;
    }

    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button
                        color="gray"
                        onClick={onCancel}
                    >{cancelText}</Button>
                    <Button
                        color="pink"
                        onClick={onConfirm}
                    >{confirmText}</Button>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    confirmText: '확인',
    cancelText: '취소'
};

export default Dialog;