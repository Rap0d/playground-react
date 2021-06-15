import React, {useEffect} from "react";

function User({user, onRemove, onToggle}) {
    // Component의 Mount/Unmount 이벤트를 위한 useEffect 함수
    // 첫 번째 파라미터: 함수
    // 두 번째 파라미터: 의존값이 들어있는 배열(deps)
    // 만약 deps 배열이 비워지게 되면 컴포넌트가 처음 나타날 때만 useEffect 호출

    useEffect(() => {
        console.log('Set User')
        console.log(user)
        // 반환되는 함수: cleanup 함수
        // deps가 비어있는 경우에[] 컴포넌트가 사라질 때 cleanup 함수 호출
        return () => {
            console.log('Before Set User')
            console.log(user)
        }

        /*
        deps에 특정 값을 넣게되면 컴포넌트가 처음 마운트 될 때도 호출
        지정한 값이 바뀌거나 언마운트 시에도 호출

        deps를 아예 사용하지 않으면 리렌더링할 때 마다 호출
        */
    }, [user])
    /*
        주로 마운트 시의 작업:
        - props로 받은 값을 컴포넌트의 로컬 상태로 설정
        - 외부 API요청
        - 라이브러리 사용(D3, Video.js)
        - setInterval을 통한 반복 작업 혹은 setTimeout을 통한 작업 예약

        언마운트 시의 작업
        - setInterval, setTimeout 을 사용하여 등록한 작업 Clear
        - 라이브러리 인스턴스 제거
     */

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