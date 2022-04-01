import React, {useEffect, useState} from 'react'
import axios from "axios";

function SocketRooms() {
    //
    // const [roomList, setRoomList] = useState({
    //     roomId: '',
    //     name:''
    // })
    //
    // const {roomId, name} = roomList

    useEffect(() => {
        findAllRoom()
    })

    const findAllRoom = () => {
        axios.get('http://localhost:9091/lunch/rooms').then(response => {
            console.log(response)
            console.log(...response.data)
            // setRoomList(response.data)
        })
    }

    return (
        <>
            <div>
                {/*{roomList}*/}
            </div>
        </>
    )
}

export default SocketRooms