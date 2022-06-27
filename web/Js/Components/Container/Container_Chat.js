import ChatCard from "./Container_Chat/ChatCard.js";
import SearchFriendComponent from "./Container_Chat/SearchFriendComponent.js";
import ChatWindowComponent from "./Container_Chat/ChatWindowComponent.js";
var chats = null;

async function getChats() {
  let response = await fetch("http://localhost:8080/ShutUp/getChats?shutid=" + window.localStorage.getItem("ShutId"));
  let myJson = await response.json();
  return myJson;
}

export function Container_Chat() {
  const [showFriends, setShowFriends] = React.useState(false);
  const [currentChat, setCurrentChat] = React.useState(null);
  React.useEffect(() => {
    getChats().then(myJson => {
      chats = myJson;
      console.log(chats);
    });
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
    setShowFriends: setShowFriends,
    setCurrentChat: setCurrentChat
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "row search-chat"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Buscar conversacion"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row conversations"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9 chat-window",
    style: {
      padding: 0
    }
  }, currentChat != null ? /*#__PURE__*/React.createElement(ChatWindowComponent, {
    currentChat: currentChat
  }) : null)));
}
export default Container_Chat;