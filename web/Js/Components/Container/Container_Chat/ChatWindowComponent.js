export default function ChatWindowComponent({
  currentChat
}) {
  const [visibleData, setVisibleData] = React.useState(false);

  function toogleVisibleData() {
    if (visibleData) {
      setVisibleData(false);
    } else {
      setVisibleData(true);
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "ChatWindowComponent"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'main ' + (visibleData ? 'active' : ''),
    onClick: () => toogleVisibleData()
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  })), /*#__PURE__*/React.createElement("div", {
    className: 'data ' + (visibleData ? 'active' : '')
  }));
}