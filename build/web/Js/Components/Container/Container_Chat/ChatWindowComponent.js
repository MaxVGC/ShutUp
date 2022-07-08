import MessageCard from "./MessageCard.js";
import ChatContext from './ChatContext.js';
var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";
var dataUser = null;
var banner = "https://es.normandie-tourisme.fr/wp-content/uploads/sites/7/2020/01/8118-Mont-Saint-Michel-couleur-dautomne-%C2%A9-DaLiu-Shutterstock.com-%C2%A9-DaLiu-Shutterstock.com_.jpg";
export default function ChatWindowComponent({
  currentChat
}) {
  const [visibleData, setVisibleData] = React.useState(false);
  const [actualCurrentChat, setActualCurrentChat] = React.useState(null);
  const [queryingDataStatus, setQueryingDataStatus] = React.useState(true);
  const {
    setUpdateChat
  } = React.useContext(ChatContext);
  const inputMsg = React.useRef();
  const msgContainer = React.useRef();

  function inputKeyPress(e) {
    if (e.key === 'Enter') {
      msgOut();
    }
  }

  function msgOut() {
    if (inputMsg.current.value != '' & inputMsg.current.value.trim() != "") {
      //send_msg(inputMsg.current.value);
      var aux = {
        Message: inputMsg.current.value,
        current: currentChat,
        From: window.localStorage.getItem("ShutId"),
        Time: +new Date() / 1000
      };
      var aux2 = JSON.parse(sessionStorage.getItem(currentChat));
      aux2.Messages.push(aux);
      sessionStorage.setItem(currentChat, JSON.stringify(aux2));
      setUpdateChat(aux);
    }

    inputMsg.current.value = "";
  }

  function toogleVisibleData() {
    if (visibleData) {
      setVisibleData(false);
    } else {
      setVisibleData(true);
    }
  }

  React.useEffect(() => {
    dataUser = JSON.parse(sessionStorage.getItem(currentChat));
    setActualCurrentChat(currentChat);
    setQueryingDataStatus(false);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "ChatWindowComponent"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'main ' + (visibleData ? 'active' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgBx",
    onClick: () => toogleVisibleData()
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "xd"
  }), dataUser == null ? null : dataUser.data[0].CurrentState == "Online" ? /*#__PURE__*/React.createElement("div", {
    className: "state"
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "dataUser",
    onClick: () => toogleVisibleData()
  }, queryingDataStatus ? null : /*#__PURE__*/React.createElement("h3", null, dataUser.data[0].Username, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, dataUser.data[0].Name + " " + dataUser.data[0].Lastname + " - " + (dataUser.data[0].CurrentState == "Online" ? 'En linea' : 'Desconectado')))), /*#__PURE__*/React.createElement("div", {
    className: "actionBtns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn_custom"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "call-outline"
  })), /*#__PURE__*/React.createElement("div", {
    className: "btn_custom"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "videocam-outline"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "messagesContainer",
    ref: msgContainer
  }, queryingDataStatus ? null : dataUser.Messages.map((element, key) => /*#__PURE__*/React.createElement(MessageCard, {
    msg: element.Message,
    transmitter: 'Me',
    key: key,
    scroll: msgContainer.current
  }))), /*#__PURE__*/React.createElement("div", {
    className: "inputChatWindow"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "happy-outline"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: inputMsg,
    onKeyPress: e => inputKeyPress(e)
  }), /*#__PURE__*/React.createElement("ion-icon", {
    name: "send",
    onClick: () => msgOut()
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'data ' + (visibleData ? 'active' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner",
    style: {
      backgroundImage: 'url(' + banner + ')'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "profileImg"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "Profile image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dataUser"
  }, queryingDataStatus ? null : /*#__PURE__*/React.createElement("h3", null, dataUser.data[0].Name + " " + dataUser.data[0].Lastname))));
}