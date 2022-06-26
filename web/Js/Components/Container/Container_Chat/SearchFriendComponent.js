import FriendContactCard from "./FriendContactCard.js";
var users = null;
var copy = null;

async function getFriends() {
  let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId") + "&amount=all");
  let myJson = await response.json();
  return myJson;
}

export default function SearchFriendComponent({
  setShowFriends
}) {
  const [queryStatus, setQueryStatus] = React.useState();
  const [value, setValue] = React.useState();
  const input = React.useRef();
  const ref = React.useRef();
  React.useEffect(() => {
    getFriends().then(myJson => {
      users = myJson;
      copy = users;
      setQueryStatus(false);
    });
  }, []);

  function changeInput(e) {
    console.log(e);

    if (e == '') {
      users = copy;
      console.log(users);
      console.log(copy);
      setValue(e);
    } else {
      users.friends = users.friends.filter(function (el) {
        return el.Name.toLowerCase().indexOf(e.toLowerCase()) > -1;
      });
      setValue(e);
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "searchFriendComponent"
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
    onChange: e => changeInput(e.target.value)
  }), /*#__PURE__*/React.createElement("ion-icon", {
    name: "close",
    onClick: () => setShowFriends(false),
    style: {
      fontSize: '25px'
    }
  })), users == null ? /*#__PURE__*/React.createElement("div", {
    className: "img-loading"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/Assets/loading.svg",
    alt: "Loading"
  })) : /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "data-search"
  }, users.friends.map((element, key) => /*#__PURE__*/React.createElement(FriendContactCard, {
    data: element,
    key: key
  }))))));
}