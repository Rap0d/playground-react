import React from "react";

function CreateUser({username, email, onChange, onCreate}) {
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

export default CreateUser