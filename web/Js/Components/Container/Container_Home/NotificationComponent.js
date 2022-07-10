import NotificationFriendCard from "./NotificationFriendCard.js";
var Notifications = {
  recent: null,
  requests: null
};

async function getNotifications() {
  let response = await fetch("http://localhost:8080/ShutUp/Notifications?shutid=" + window.localStorage.getItem("ShutId"));
  let myJson = await response.json();
  return myJson;
}

getNotifications().then(myJson => {
  Notifications.requests = myJson.requests;
  Notifications.recent = null;
});
export default function NotificationComponent() {
  const [active, setActive] = React.useState(0);
  const [update, setUpdate] = React.useState(false);

  function toogleActive(e) {
    setActive(e);
  }

  function updateNotifications() {
    getNotifications().then(myJson => {
      Notifications.requests = myJson.requests;
      setUpdate(true);
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "NotificationComponentMain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row NotificationComponentMain-Title"
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      color: 'white',
      margin: 0
    }
  }, "Notificaciones")), /*#__PURE__*/React.createElement("div", {
    className: "row NotificationComponentMain-Types"
  }, /*#__PURE__*/React.createElement("div", {
    className: "type " + (active == 0 ? 'active' : ''),
    onClick: () => toogleActive(0)
  }, /*#__PURE__*/React.createElement("span", null, "Recientes")), /*#__PURE__*/React.createElement("div", {
    className: "type " + (active == 1 ? 'active' : ''),
    onClick: () => toogleActive(1)
  }, /*#__PURE__*/React.createElement("span", null, "Solicitudes"))), /*#__PURE__*/React.createElement("div", {
    className: "row NotificationComponentMain-Content"
  }, active == 0 ? Notifications.recent != null ? Notifications.recent.map((element, key) => console.log(Notifications)) : /*#__PURE__*/React.createElement("div", {
    className: "emptyRequest"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/ShutUp/Assets/empty.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'white',
      marginTop: '10px',
      textAlign: 'center'
    }
  }, "No hay notificaciones nuevas")) : Notifications.requests != null ? Notifications.requests.map((element, key) => /*#__PURE__*/React.createElement(NotificationFriendCard, {
    data: element,
    key: key,
    setUpdate: updateNotifications
  })) : /*#__PURE__*/React.createElement("div", {
    className: "emptyRequest"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/ShutUp/Assets/empty2.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'white',
      marginTop: '10px',
      textAlign: 'center'
    }
  }, "No hay solicitudes nuevas")))));
}