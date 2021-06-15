import React from "react";

const CreateUser = ({username, email, onChange, onCreate}) => {
    return (
        <>
            <input
                name={'username'}
                placeholder={'UserName'}
                onChange={onChange}
                value={username}
            />
            <input
                name={'email'}
                placeholder={'E-Mail'}
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>Create</button>
        </>
    )
}

/*
React.memo: 리렌더링을방지하기 위해 컴포넌트의 리렌더링 성능 최적화
컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정
 */
export default React.memo(CreateUser)