import Context from '../../Context.js';
import { ProviderContainer } from './ContainerContext.js';
import Container_Home from './Container_Home.js';
import Container_Chat from './Container_Chat.js';
import initWebSocket from './../../WebSocket.js';
var prevData;
export function Container() {
  const {
    container,
    actions
  } = React.useContext(Context);
  const [dataContainerChat, setDataContainerChat] = React.useState({
    isOpened: false,
    Conversations: null,
    QueryDataUser: false,
    CurrentChat: null,
    TimesOpened: 0,
    DataCurrentUser: null,
    CurrentConversation: null,
    UpdateChatCard: null
  });
  const webSocket = initWebSocket();
  React.useEffect(() => {
    if (webSocket.onChangeData != null && prevData != webSocket.onChangeData) {
      prevData = webSocket.onChangeData;

      if (prevData.Type == "Message" && prevData.Payload.For == window.localStorage.getItem("ShutId")) {
        var aux = JSON.parse(sessionStorage.getItem(prevData.Payload.From));
        console.log(prevData.Payload.Message);
        aux.Messages.push({
          Message: prevData.Payload.Message,
          For: window.localStorage.getItem("ShutId"),
          From: prevData.Payload.From,
          Time: {
            $numberLong: +new Date()
          }
        });
        sessionStorage.setItem(prevData.Payload.From, JSON.stringify(aux));

        if (dataContainerChat.CurrentChat == prevData.Payload.From) {
          setDataContainerChat({ ...dataContainerChat,
            UpdateChatCard: prevData.Payload.From,
            CurrentConversation: aux.Messages
          });
        } else {
          setDataContainerChat({ ...dataContainerChat,
            UpdateChatCard: prevData.Payload.From
          });
        }
      }
    }
  });
  return /*#__PURE__*/React.createElement(ProviderContainer, {
    value: {
      dataContainerChat,
      setDataContainerChat,
      webSocket
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "Container_Main"
  }, container.value === "home" && /*#__PURE__*/React.createElement(Container_Home, null), container.value === "chatbubbles" && /*#__PURE__*/React.createElement(Container_Chat, null), container.value === "call" && /*#__PURE__*/React.createElement(Container_Home, null), container.value === "accessibility" && /*#__PURE__*/React.createElement(Container_Home, null)));
}
export default Container;