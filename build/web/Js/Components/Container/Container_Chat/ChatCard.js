var dataUserChatCard = null;

async function getDataUser(shutid) {
  let response = await fetch("http://localhost:8080/ShutUp/getDataUser?shutid=" + shutid + "");
  let myJson = await response.json();
  return myJson;
}

export function ChatCard({
  data
}) {
  const [queryingDataStatus, setQueryingDataStatus] = React.useState(true);
  React.useEffect(() => {
    if (data.Participants[0] != window.localStorage.getItem("ShutId")) {
      getDataUser(data.Participants[0]).then(myJson => {
        dataUserChatCard = myJson;
        setQueryingDataStatus(false);
      });
    }

    if (data.Participants[1] != window.localStorage.getItem("ShutId")) {
      getDataUser(data.Participants[1]).then(myJson => {
        dataUserChatCard = myJson;
        setQueryingDataStatus(false);
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "chat_card",
    onClick: () => console.log(props)
  });
}
export default ChatCard;