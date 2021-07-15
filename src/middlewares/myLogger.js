/*
미들웨어: 함수를 연달아 두 번 리턴하는 함수
store: 리덕스 스토어 인스턴스
    - 이 안에 dispatch, getState, subscribe 내장함수들이 들어있음
next: 액션을 다음 미들웨어에 전달하는 함수.
    - next(action)의 형태로 사용
    - 만약 다음 미들웨어가 없다면 리듀서에게 액션 전달
    - next를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에 전달되지 않음
action: 현재 처리하고 있는 액션 객체

리덕스 스토어에는 여러 개의 미들 웨어를 등록할 수 있다.
새로운 액션이 디스패치되면 첫 번째로 등록한 미들웨어가 호출
만약 미들웨어에서 next(action)을 호출하게 되면 다음 미들웨어로 액션이 넘어감
만약 미들웨어에서 store.dispatch를 사용하면 다른 액션을 추가적으로 발생 가능
 */
const myLogger = store => next => action => {
    console.log(action)
    const result = next(action)

    // Update 이후의 상태 조회
    console.log('\t', store.getState())

    // dispatch(action)의 결과물 반환
    return result
}

export default myLogger