import ChatContext from './ChatContext.js';
import ContainerContext from './../ContainerContext.js';
var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";

async function getDataUser(shutid) {
  let response = await fetch("http://localhost:8080/ShutUp/getDataUser?shutid=" + shutid + "");
  let myJson = await response.json();
  return myJson;
}

export function ChatCard({
  data,
  n
}) {
  const [dataUserChatCard, setDataUserChatCard] = React.useState();
  const [date, setDate] = React.useState();
  const [queryingDataStatus, setQueryingDataStatus] = React.useState(true);
  const [ShutidFriend, setShutidFriend] = React.useState();
  const [lastMsg, setLastMsg] = React.useState(0);
  const {
    dataContainerChat,
    setDataContainerChat
  } = React.useContext(ContainerContext);

  function initializeChatCard(DataUser) {
    var lng = DataUser.Messages.length - 1;
    setLastMsg(lng);
    setDate(new Date(parseInt(DataUser.Messages[lng].Time.$numberLong)));
    setQueryingDataStatus(false);
  }

  React.useEffect(() => {
    var shutid = data.Participants[0] != window.localStorage.getItem("ShutId") ? aux = data.Participants[0] : aux = data.Participants[1];
    setShutidFriend(shutid);

    if (dataContainerChat.UpdateChatCard != null && dataContainerChat.UpdateChatCard == ShutidFriend) {
      var aux = JSON.parse(sessionStorage.getItem(dataContainerChat.UpdateChatCard));
      var lng = aux.Messages.length - 1;
      setLastMsg(lng);
      setDate(new Date(parseInt(aux.Messages[lng].Time.$numberLong)));
      setDataUserChatCard(aux);
      var x = dataContainerChat.Conversations;
      x[n].Messages = aux.Messages;
      setDataContainerChat({ ...dataContainerChat,
        UpdateChatCard: null
      });
    }
  });
  React.useEffect(() => {
    var aux = data.Participants[0] != window.localStorage.getItem("ShutId") ? aux = 0 : aux = 1;
    var SSData = JSON.parse(sessionStorage.getItem(data.Participants[aux]));
    setShutidFriend(data.Participants[aux]); //Quitar SSData==null para actualizar cada vez que se inicia

    if (SSData == null) {
      getDataUser(data.Participants[aux]).then(myJson => {
        sessionStorage.setItem(data.Participants[aux], JSON.stringify({ ...data,
          data: myJson.data[0]
        }));
        setDataUserChatCard({ ...data,
          data: myJson.data[0]
        });
        initializeChatCard({ ...data,
          data: myJson.data[0]
        });
      });
    } else {
      if (SSData.data == null) {
        getDataUser(data.Participants[aux]).then(myJson => {
          sessionStorage.setItem(data.Participants[aux], JSON.stringify({ ...data,
            data: myJson.data[0]
          }));
          setDataUserChatCard({ ...data,
            data: myJson.data[0]
          });
          initializeChatCard({ ...data,
            data: myJson.data[0]
          });
        });
      } else {
        setDataUserChatCard(SSData);
        SSData.Messages = data.Messages;
        sessionStorage.setItem(data.Participants[aux], JSON.stringify(SSData));
        initializeChatCard(SSData);
      }
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "chat_card",
    onClick: () => queryingDataStatus ? null : setDataContainerChat({ ...dataContainerChat,
      CurrentChat: ShutidFriend,
      DataCurrentUser: dataUserChatCard.data,
      CurrentConversation: dataUserChatCard.Messages
    })
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
  }, /*#__PURE__*/React.createElement("span", null, dataUserChatCard.data.Username)), /*#__PURE__*/React.createElement("div", {
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