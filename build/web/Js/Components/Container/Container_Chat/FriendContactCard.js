var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";
export default function FriendContactCard({
  data,
  setCurrentChat,
  setShowFriends
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'FriendContactCard'
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgBx"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "xd"
  })), /*#__PURE__*/React.createElement("div", {
    className: "data"
  }, /*#__PURE__*/React.createElement("h2", null, data.Name, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, data.Lastname))), /*#__PURE__*/React.createElement("div", {
    className: "actionBtns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btn_custom"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "call"
  })), /*#__PURE__*/React.createElement("div", {
    className: "btn_custom",
    onClick: () => (setCurrentChat(data.ShutId), setShowFriends(false))
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "chatbubble"
  })))));
}