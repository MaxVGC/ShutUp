import AddFriendComponent from "./AddFriendComponent.js";

function FriendsComponent() {
  const [addFriendDiv, setVisibleAddFriendDiv] = React.useState(false);

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
  }) : null)));
}

export default FriendsComponent;