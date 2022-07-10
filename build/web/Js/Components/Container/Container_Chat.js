import ChatCard from "./Container_Chat/ChatCard.js";
import ContainerContext from './ContainerContext.js';
import SearchFriendComponent from "./Container_Chat/SearchFriendComponent.js";
import ChatWindowComponent from "./Container_Chat/ChatWindowComponent.js";

async function getConversations() {
  let response = await fetch("http://localhost:8080/ShutUp/getConversations?shutid=" + window.localStorage.getItem("ShutId") + "&range=20&friend=none");
  let myJson = await response.json();
  return myJson;
}

export function Container_Chat() {
  const [showFriends, setShowFriends] = React.useState(false);
  const [update, setUpdate] = React.useState(true);
  const {
    dataContainerChat,
    setDataContainerChat,
    webSocket
  } = React.useContext(ContainerContext);
  React.useEffect(() => {
    if (dataContainerChat.Conversations == null) {
      getConversations().then(myJson => {
        setDataContainerChat({ ...dataContainerChat,
          isOpened: true,
          Conversations: myJson.Conversations,
          TimesOpened: dataContainerChat.TimesOpened + 1
        });
        setUpdate(false);
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "Container_Chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      height: '100%',
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3 chats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row header"
  }, /*#__PURE__*/React.createElement("h4", null, "Chats"), /*#__PURE__*/React.createElement("ion-icon", {
    name: "add-circle-outline",
    onClick: () => showFriends ? setShowFriends(false) : setShowFriends(true)
  }), showFriends ? /*#__PURE__*/React.createElement(SearchFriendComponent, {
    setShowFriends: setShowFriends
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "row search-chat"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Buscar conversacion"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row conversations"
  }, dataContainerChat.Conversations == null ? null : dataContainerChat.Conversations.map((element, key) => /*#__PURE__*/React.createElement(ChatCard, {
    key: key,
    data: element,
    n: key
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9 chat-window",
    style: {
      padding: 0
    }
  }, dataContainerChat.CurrentChat != null ? /*#__PURE__*/React.createElement(ChatWindowComponent, null) : null)));
}
export default Container_Chat;