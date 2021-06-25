import React from "react";

const profileData = {
    chang: {
        name: 'sh',
        description:
            'Engineer'
    },
    gildong: {
        name: 'Hong',
        description:
            'Gildong'
    }
}

const Profile = ({match}) => {
    // 파라미터 값을 받아올 때 match의 params 값 참조
    const {username} = match.params
    const profile = profileData[username]
    if (!profile) {
        return <div>No User</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile