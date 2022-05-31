import AddFriendCard from "./AddFriendCard.js";
var users = {
  notFriends: [],
  friends: []
};
var aux = false;

async function getUsers(text) {
  let response = await fetch("http://localhost:8080/ShutUp/SearchUsers?data=" + text + "&shutid=" + window.localStorage.getItem("ShutId"));
  let myJson = await response.json();
  users = myJson;
}

function AddFriendComponent({
  addFriendDiv,
  setVisibleAddFriendDiv
}) {
  const [word, setWord] = React.useState();
  const [querying, setQuerying] = React.useState(false);
  const ref = React.useRef();
  const input = React.useRef();

  function toogleVisible() {
    setVisibleAddFriendDiv(false);
  }

  function querydata(e) {
    if (e.key === 'Enter') {
      setQuerying(true);
      ref.current.style.overflowY = 'hidden';
      aux = true;
      toogleresults();
      input.current.disabled = true;
      getUsers(e.target.value);
      setTimeout(function () {
        console.log(users);
        setQuerying(false);
        ref.current.style.overflowY = 'auto';
        input.current.disabled = false;
      }, 5000);
    }
  }

  function toogleresults() {
    if (!aux) {
      ref.current.style.maxHeight = '0';
    } else {
      ref.current.style.maxHeight = '500px';
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "addFriendDivComponent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "search",
    style: {
      fontSize: '25px'
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: input,
    type: "text",
    placeholder: "ShutId, nombre, numero de telefono o correo",
    onKeyPress: e => querydata(e)
  }), /*#__PURE__*/React.createElement("ion-icon", {
    name: "close",
    onClick: toogleVisible,
    style: {
      fontSize: '25px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "data-search"
  }, querying ? /*#__PURE__*/React.createElement("img", {
    src: "/Assets/loading.svg",
    style: {
      width: '100px',
      height: '100px'
    }
  }) : users.notFriends != null ? users.notFriends.map((elements, key) => /*#__PURE__*/React.createElement(AddFriendCard, {
    key: key,
    data: elements,
    friends: false
  })) : null, querying ? null : users.friends != null ? users.friends.map((elements, key) => /*#__PURE__*/React.createElement(AddFriendCard, {
    key: key,
    data: elements,
    friends: true
  })) : null))));
}

export default AddFriendComponent;