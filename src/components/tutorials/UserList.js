import React from "react";

function User({user, onRemove, onToggle}) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'white'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            {/*
            jsx 외부에서 정의된 event handler나
            callback으로 parameter를 pass할 때 화살표 함수를 씀
            onRemove(user.id)를 넣으면 바로 실행되어짐
            */}
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>
    );
}

// 정적 배열 렌더링
/*
function UserList() {
    return (
        <>
            <p>정적 배열 렌더링</p>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </>
    )
}
*/

function DynamicUserList({users, onRemove, onToggle}) {
    return (
        <>
            <p>동적 배열 렌더링</p>
            {users.map((user, index) => (
                // react에서 배열을 렌더링 할 때 key라는 props 를 설정해야한다.
                // key 값은 각 원소마다 가지고 있는 고유 값으로 설정해야 한다.

                // 만약 원소의 고유값이 없다면 map() 함수를 사용할 때 설정하는
                // 콜백함수의 두 번째 파라미터 index를 key로 사용하면 된다.
                // <User user={user} key={user.id}/>

                // 만약 배열을 렌더링 할 때 key 설정을 하지 않게 된다면
                // 기본적으로 배열의 index 값을 key로 사용하게 되고,
                // 경고 메시지가 뜨게 된다.

                // 각 고유 원소에 key가 있어야 배열이 업데이트 될 때
                // 효율적으로 렌더링이 되게 된다.
                <User
                    user={user}
                    key={index}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default DynamicUserList