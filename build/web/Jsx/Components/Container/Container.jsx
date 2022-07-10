import Context from '../../Context.js';
import { ProviderContainer } from './ContainerContext.js';
import Container_Home from './Container_Home.js';
import Container_Chat from './Container_Chat.js';
import Container_Call from './Container_Call.js'
import initWebSocket from './../../WebSocket.js';

var prevData;

async function getConversations(friend) {
    let response = await fetch("http://localhost:8080/ShutUp/getConversations?shutid=" + window.localStorage.getItem("ShutId") + "&range=20&friend=" + friend);
    let myJson = await response.json();
    return myJson;
}

export function Container() {
    const { container, actions } = React.useContext(Context);
    const [dataContainerChat, setDataContainerChat] = React.useState(
        {
            isOpened: false,
            Conversations: null,
            QueryDataUser: false,
            CurrentChat: null,
            TimesOpened: 0,
            DataCurrentUser: null,
            CurrentConversation: null,
            UpdateChatCard: null
        }
    );
    //const webSocket = initWebSocket();
    const webSocket = {
        onChangeData:null
    };

    React.useEffect(() => {
        if (webSocket.onChangeData != null && prevData != webSocket.onChangeData) {
            prevData = webSocket.onChangeData;
            if (prevData.Type == "Message" && dataContainerChat.Conversations != null && container.value == "chatbubbles") {
                var aux = JSON.parse(sessionStorage.getItem(prevData.Payload.From));
                if (aux != null) {
                    aux.Messages.push({ Message: prevData.Payload.Message, For: window.localStorage.getItem("ShutId"), From: prevData.Payload.From, Time: { $numberLong: (+new Date()) } });
                    sessionStorage.setItem(prevData.Payload.From, JSON.stringify(aux));
                    if (dataContainerChat.CurrentChat == prevData.Payload.From) {
                        setDataContainerChat({ ...dataContainerChat, UpdateChatCard: prevData.Payload.From, CurrentConversation: aux.Messages });
                    } else {
                        setDataContainerChat({ ...dataContainerChat, UpdateChatCard: prevData.Payload.From });
                    }
                }
            } else if (prevData.Type == "Message" && dataContainerChat.Conversations != null && container.value != "chatbubbles") {
                var aux = JSON.parse(sessionStorage.getItem(prevData.Payload.From));
                aux.Messages.push({ Message: prevData.Payload.Message, For: window.localStorage.getItem("ShutId"), From: prevData.Payload.From, Time: { $numberLong: (+new Date()) } });
                sessionStorage.setItem(prevData.Payload.From, JSON.stringify(aux));
                var x = dataContainerChat.Conversations;
                var n;
                x.map((element, i) => (
                    ((element.Participants[0] == prevData.Payload.From || element.Participants[1] == prevData.Payload.From) ? n = i : null)
                ));
                x[n].Messages = aux.Messages;
                console.log(x[n])
                if(dataContainerChat.CurrentChat==prevData.Payload.From){
                    setDataContainerChat({ ...dataContainerChat, UpdateChatCard: prevData.Payload.From,Conversations:x,CurrentConversation:x[n].Messages });
                }else{
                    setDataContainerChat({ ...dataContainerChat, UpdateChatCard: prevData.Payload.From,Conversations:x });
                }
            } else if ((prevData.Type == "NewMessage" || prevData.Type == "Message") && dataContainerChat.Conversations == null) {
                getConversations("none").then(myJson => {
                    setDataContainerChat({ ...dataContainerChat, Conversations: myJson.Conversations });
                });
            } else if ((prevData.Type == "NewMessage" && dataContainerChat.Conversations != null)) {
                getConversations(prevData.Payload.From).then(myJson => {
                    sessionStorage.setItem(prevData.Payload.From, JSON.stringify(myJson.Conversations[0]));
                    var conv = dataContainerChat.Conversations;
                    conv.unshift({ Participants: [prevData.Payload.From, window.localStorage.getItem("ShutId")], Messages: myJson.Conversations[0].Messages });
                    setDataContainerChat({ ...dataContainerChat, Conversations: conv });
                });
            }
        }
    });

    return (
        <ProviderContainer value={{ dataContainerChat, setDataContainerChat, webSocket }}>
            <div className="Container_Main">
                {container.value === "home" && <Container_Home />}
                {container.value === "chatbubbles" && <Container_Chat />}
                {container.value === "call" && <Container_Call />}
                {container.value === "accessibility" && <Container_Home />}
            </div>
        </ProviderContainer>
    );
}

export default Container;