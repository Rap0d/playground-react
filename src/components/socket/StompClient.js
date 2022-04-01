import SockJS from 'sockjs-client';
import StompJs from '@stomp/stompjs';

const client = new StompJs.Client({
    brokerURL: 'ws://localhost:9091/ws-stomp',
    debug: function (str) {
        console.log(str)
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
})

if (typeof WebSocket !== 'function') {
    client.webSocketFactory = function () {
        return new SockJS('http://localhost:9091/ws-stomp')
    }
}

client.onConnect = function (frame) {

}

client.onStompError = function (frame) {
    console.log('Broker reported error: ' + frame.headers['message'])
    console.log('Additional details')
}

client.activate()

function StompClient() {
    return(
        <></>
    )
}

export default StompClient