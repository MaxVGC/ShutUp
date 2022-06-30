var webSocket;
var nickname = window.localStorage.getItem("ShutId");

//initWebSocket(nickname);

function initWebSocket(nickname) {
    if ("WebSocket" in window) {
        if (webSocket == null) {
            var url = null;
            if (window.location.protocol == 'http:') {
                url = "ws://" + window.location.host + "/ShutUp/webSocket/" + nickname;
            } else {
                url = "wss://" + window.location.host + "/ShutUp/webSocket/" + nickname;
            }
            webSocket = new WebSocket(url);
        } else {
            alert("Has entrado en la sala de chat ...");
        }
    }

    webSocket.onopen = function() {
        console.log("entre");
    };

    webSocket.onmessage = function(evt) {
        console.log("message@"+evt.data);
    };
}

function send_msg(input_msg) {
    if (webSocket != null) {        
        webSocket.send(input_msg);
    } else {
        alert("Estás desconectado, vuelve a ingresar a la sala de chat ...");
    }
};