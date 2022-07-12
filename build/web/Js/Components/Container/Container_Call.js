import VideoCall from './../../VideoCall.js';
export default function Container_Call() {
  const videoCall = VideoCall();
  return /*#__PURE__*/React.createElement("div", {
    className: "ContainerCall" + " AllScreen",
    style: {
      margin: 0,
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row" + " PrincipalScreen" + " AllScreen",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: " Screens LocalScreen H100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Video"
  }, /*#__PURE__*/React.createElement("video", {
    id: "localVideo",
    autoPlay: true,
    muted: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: " Screens RemoteScreen H100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Video"
  }, /*#__PURE__*/React.createElement("video", {
    id: "remoteVideo",
    autoPlay: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "VideoControls" + " AllScreen",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => videoCall.toogleVideo()
  }, "aaaa")));
}