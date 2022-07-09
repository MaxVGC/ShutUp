import Context from '../../Context.js';
import { ProviderContainer } from './ContainerContext.js';
import Container_Home from './Container_Home.js';
import Container_Chat from './Container_Chat.js';
import initWebSocket from './../../WebSocket.js';
export function Container() {
  const {
    container,
    actions
  } = React.useContext(Context);
  const [dataContainerChat, setDataContainerChat] = React.useState({
    isOpened: false,
    Conversations: null,
    QueryDataUser: false
  });
  const webSocket = initWebSocket();
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