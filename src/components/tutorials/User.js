import axios from "axios";
import {useAsync} from "react-async";

// import useAsync from "./useAsync";

/*
useAsync를 사용할 때는 프로미스를 반환하는 함수의 파라미터를 객체형태로 넣음
 */
async function getUser({id}) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return response.data
}

function User({id}) {
    /*
    id가 바뀔때마다 재호출되도록 deps에 id 넣어줌
     */
    // const [state] = useAsync(() => getUser(id), [id])
    // const {loading, data: user, error} = state

    // react-async를 사용한 async
    // watch 값에 특정 값을 넣어주면 이 값이 바뀔때 마다 promiseFn에 넣은 함수 다시 호출
    const {data: user, error, isLoading} = useAsync({
        promiseFn: getUser,
        id,
        watch: id
    })

    if (isLoading) {
        return <div>로딩중..</div>;
    }
    if (error) {
        return <div>에러가 발생했습니다</div>;
    }
    if (!user) {
        return null;
    }

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    )
}

export default User