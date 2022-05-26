export function ChatCard(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "chat_card",
    onClick: () => console.log(props)
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.data.image,
    alt: "Profile image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, props.data.name, /*#__PURE__*/React.createElement("ion-icon", {
    name: "ellipsis-horizontal"
  })), /*#__PURE__*/React.createElement("div", {
    className: "data-msg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "last-msg"
  }, props.data.LastTransmitter === 'me' ? /*#__PURE__*/React.createElement("ion-icon", {
    name: "checkmark-done"
  }) : null, ' ' + props.data.LastMessage), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, props.data.TimeLastMessage))));
}
export default ChatCard;