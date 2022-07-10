import AddFriendComponent from "./AddFriendComponent.js";
var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";
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
      backgroundImage: 'url(' + image + ')'
    },
    key: key
  }, elements.CurrentState != "Online" ? /*#__PURE__*/React.createElement("ion-icon", {
    name: "radio-button-off"
  }) : /*#__PURE__*/React.createElement("ion-icon", {
    name: "radio-button-on"
  }))) : /*#__PURE__*/React.createElement("img", {
    src: "/ShutUp/Assets/loading.svg",
    style: {
      width: '100px',
      height: '100px'
    }
  })));
}

export default FriendsComponent;