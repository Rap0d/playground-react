import {getUser, useUsersDispatch, useUsersState} from "./UsersContext";
import {useEffect} from "react";

function UserWithContext({id}) {
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    useEffect(() => {
        getUser(dispatch, id).then(r => console.log(r));
    }, [dispatch, id]);

    const {data: user, loading, error} = state.user;

    if (loading) {
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

export default UserWithContext