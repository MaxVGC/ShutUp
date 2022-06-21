var users = null;

async function getFriends() {
  let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId") + "&amount=all");
  let myJson = await response.json();
  return myJson;
}

export default function SearchFriendComponent({
  setShowFriends
}) {
  const input = React.useRef();
  const ref = React.useRef();
  React.useEffect(() => {
    getFriends().then(myJson => {
      users = myJson;
    });
  }, []);
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
    onKeyPress: e => querydata(e)
  }), /*#__PURE__*/React.createElement("ion-icon", {
    name: "close",
    onClick: () => setShowFriends(false),
    style: {
      fontSize: '25px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "data-search"
  }, users == null ? console.log("xd") : console.log("xd")))));
}