export default function AddFriendCard({
  data,
  friends
}) {
  const [send, setSend] = React.useState(false);

  async function addFriendQuery(user) {
    let response = await fetch("http://localhost:8080/ShutUp/SendFriendRequest?from=" + window.localStorage.getItem("ShutId") + "&to=" + user);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "addFriendCard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "img-friend",
    style: {
      backgroundImage: 'url(/Assets/photo.jpg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "data",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "name",
    style: {
      fontSize: '24px',
      color: 'white'
    }
  }, data.Name + " " + data.Lastname), /*#__PURE__*/React.createElement("div", {
    className: "user-info",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ShutId",
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px'
    }
  }, "ShutId"), /*#__PURE__*/React.createElement("span", null, data.ShutId)), /*#__PURE__*/React.createElement("div", {
    className: "Username",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px'
    }
  }, "Username"), /*#__PURE__*/React.createElement("span", null, data.Username)))), /*#__PURE__*/React.createElement("div", {
    className: "btn-add"
  }, send ? /*#__PURE__*/React.createElement("ion-icon", {
    name: "time"
  }) : friends ? data.AcceptedRequest ? /*#__PURE__*/React.createElement("ion-icon", {
    name: "people"
  }) : /*#__PURE__*/React.createElement("ion-icon", {
    name: "time"
  }) : /*#__PURE__*/React.createElement("ion-icon", {
    onClick: () => (setSend(true), addFriendQuery(data.ShutId)),
    name: "add-circle"
  })));
}