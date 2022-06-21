import AddFriendComponent from "./AddFriendComponent.js";
var users = {
  friends: []
};

async function getFriends() {
  let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId") + "&amount=10");
  let myJson = await response.json();
  return myJson;
}

function FriendsComponent() {
  const [addFriendDiv, setVisibleAddFriendDiv] = React.useState(false);
  const [friendsData, setFriendsData] = React.useState(false);
  React.useEffect(() => {
    getFriends().then(myJson => {
      users = myJson;
      setFriendsData(true);
    });
  }, []);

  function setVisibleAddFriend_Div() {
    if (addFriendDiv) {
      setVisibleAddFriendDiv(false);
    } else {
      setVisibleAddFriendDiv(true);
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "row friends-title"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'white'
    }
  }, "Amigos")), /*#__PURE__*/React.createElement("div", {
    className: "row friends"
  }, /*#__PURE__*/React.createElement("div", {
    className: "add-friend"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "person-add",
    onClick: () => {
      setVisibleAddFriend_Div();
    }
  }), addFriendDiv ? /*#__PURE__*/React.createElement(AddFriendComponent, {
    addFriendDiv: addFriendDiv,
    setVisibleAddFriendDiv: setVisibleAddFriendDiv
  }) : null), friendsData ? users.friends.map((elements, key) => /*#__PURE__*/React.createElement("div", {
    className: "card-friend",
    style: {
      marginLeft: '12px',
      backgroundImage: 'url(/Assets/photo.jpg)'
    },
    key: key
  }, elements.CurrentState != "Online" ? /*#__PURE__*/React.createElement("ion-icon", {
    name: "radio-button-off"
  }) : /*#__PURE__*/React.createElement("ion-icon", {
    name: "radio-button-on"
  }))) : /*#__PURE__*/React.createElement("img", {
    src: "/Assets/loading.svg",
    style: {
      width: '100px',
      height: '100px'
    }
  })));
}

export default FriendsComponent;