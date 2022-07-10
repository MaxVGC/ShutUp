var webSocket;

const initWebSocket = () => {
    const [onChangeData, setData] = React.useState(null);

    if ("WebSocket" in window) {
        if (webSocket == null) {
            var url = null;
            if (window.location.protocol == 'http:') {
                url = "ws://" + window.location.host + "/ShutUp/webSocket/" + window.localStorage.getItem("ShutId");
            } else {
                url = "wss://" + window.location.host + "/ShutUp/webSocket/" + window.localStorage.getItem("ShutId");
            }
            webSocket = new WebSocket(url);
        }
    }

    function send_msg(input_msg) {
        if (webSocket != null) {
            webSocket.send(input_msg);
        } else {
            alert("Estás desconectado, vuelve a iniciar sesion en la aplicacion ...");
        }
    };

    webSocket.onopen = function () {
        console.log("entre");
    };

    webSocket.onmessage = function (evt) {
        setData(JSON.parse(evt.data));
    };

    webSocket.onclose=function(){
        sessionStorage.clear();
    };

    return { webSocket, send_msg, setData, onChangeData };
}

export default initWebSocket;