import ChatContext from './ChatContext.js'; //import ContainerContext from './../ContainerContext.js';

var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";

async function getDataUser(shutid) {
  let response = await fetch("http://localhost:8080/ShutUp/getDataUser?shutid=" + shutid + "");
  let myJson = await response.json();
  return myJson;
}

export function ChatCard({
  data,
  setCurrentChat
}) {
  const [dataUserChatCard, setDataUserChatCard] = React.useState();
  const [date, setDate] = React.useState();
  const [queryingDataStatus, setQueryingDataStatus] = React.useState(true);
  const [ShutidFriend, setShutidFriend] = React.useState();
  const [lastMsg, setLastMsg] = React.useState(0);
  const {
    updateChat,
    setUpdateChat
  } = React.useContext(ChatContext); //const { dataContainerChat,setDataContainerChat } = React.useContext(ContainerContext);

  React.useEffect(() => {
    if (updateChat != null && updateChat.current == ShutidFriend) {
      var aux = data.Participants[0] != window.localStorage.getItem("ShutId") ? aux = 0 : aux = 1;
      setDataUserChatCard(JSON.parse(sessionStorage.getItem(updateChat.current)));
      initializeChatCard(JSON.parse(sessionStorage.getItem(updateChat.current)), aux);
      setUpdateChat(null);
    }
  });
  React.useEffect(() => {
    var aux = data.Participants[0] != window.localStorage.getItem("ShutId") ? aux = 0 : aux = 1;
    var SSData = JSON.parse(sessionStorage.getItem(data.Participants[aux]));

    if (SSData == null) {
      getDataUser(data.Participants[aux]).then(myJson => {
        sessionStorage.setItem(data.Participants[aux], JSON.stringify({ ...myJson,
          ...data
        }));
        setDataUserChatCard({ ...myJson,
          ...data
        });
        initializeChatCard({ ...myJson,
          ...data
        }, aux);
      });
    } else {
      SSData.Messages = data.Messages;
      sessionStorage.setItem(data.Participants[aux], JSON.stringify(SSData));
      setDataUserChatCard(SSData);
      initializeChatCard(SSData, aux);
    }
  }, []);

  function initializeChatCard(dataUserChatCard, aux) {
    var lng = dataUserChatCard.Messages.length - 1;
    setLastMsg(lng);
    setDate(new Date(dataUserChatCard.Messages[lng].Time * 1000));
    setShutidFriend(data.Participants[aux]);
    setQueryingDataStatus(false);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "chat_card",
    onClick: () => queryingDataStatus ? null : setCurrentChat(ShutidFriend)
  }, queryingDataStatus ? "xd" : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "imgProfile",
    style: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "imgP"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dataChatCard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nameChatCard"
  }, /*#__PURE__*/React.createElement("span", null, dataUserChatCard.data[0].Username)), /*#__PURE__*/React.createElement("div", {
    className: "previewMsgChatCard"
  }, dataUserChatCard.Messages[lastMsg].From == window.localStorage.getItem("ShutId") ? /*#__PURE__*/React.createElement("ion-icon", {
    name: "checkmark-outline",
    style: {
      marginRight: '5px'
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, dataUserChatCard.Messages[lastMsg].Message))), /*#__PURE__*/React.createElement("div", {
    className: "dataTime"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: '600',
      fontSize: '15px',
      color: 'white'
    }
  }, date.getHours() + ":" + date.getMinutes()), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: '300',
      fontSize: '10px',
      color: 'white'
    }
  }, date.getDate() + "/" + date.getMonth() + "/" + (date.getFullYear() - 2000)))));
}
export default ChatCard;