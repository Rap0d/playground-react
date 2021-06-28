import React, {useEffect} from "react";

function HistorySample({history}) {
    const goBack = () => {
        history.goBack()
    }

    const goHome = () => {
        history.push('/')
    }

    useEffect(() => {
        console.log(history)
        const unblock = history.block(
            'Are you sure you want to leave this page?')
        return () => {
            unblock()
        }
    }, [history])

    return (
        <>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goHome}>Go Home</button>
        </>
    )
}

export default HistorySample