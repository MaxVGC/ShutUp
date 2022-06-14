export default function RequestCard({
  data
}) {
  const ref = React.useRef();
  return /*#__PURE__*/React.createElement("div", {
    className: "NotificationComponentMain-requestCard",
    ref: ref
  }, /*#__PURE__*/React.createElement("ion-icon", {
    class: "icon",
    name: "person-add"
  }), /*#__PURE__*/React.createElement("div", {
    className: "imgProfile",
    style: {
      backgroundImage: 'url(' + data.imgProfile + ')',
      backgroundSize: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "data"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'white'
    }
  }, "\xA1", data.Name, " te ha enviado una solicitud de amistad!"), /*#__PURE__*/React.createElement("div", {
    className: "btns"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "checkmark-circle",
    onClick: () => console.log(data.ShutId)
  }), /*#__PURE__*/React.createElement("ion-icon", {
    name: "close-circle",
    onClick: () => ref.current.remove()
  }))));
}