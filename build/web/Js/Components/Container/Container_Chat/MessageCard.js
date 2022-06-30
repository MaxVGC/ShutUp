export default function MessageCard({
  msg,
  transmitter,
  scroll
}) {
  var currentTime = new Date();
  React.useEffect(() => {
    scroll.scrollTop = scroll.scrollHeight;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: 'msgCardContainer ' + transmitter
  }, /*#__PURE__*/React.createElement("div", {
    className: 'msgCard ' + transmitter
  }, /*#__PURE__*/React.createElement("span", null, msg)), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, currentTime.getHours() + ':' + currentTime.getMinutes()));
}