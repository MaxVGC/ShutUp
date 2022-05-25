import Context from '../../Context.js';
import Container_Home from './Container_Home.js';
export function Container() {
  const {
    state,
    actions
  } = React.useContext(Context);
  return /*#__PURE__*/React.createElement("div", {
    className: "Container_Main"
  }, state.value === "home" && /*#__PURE__*/React.createElement(Container_Home, null), state.value === "chatbubbles" && /*#__PURE__*/React.createElement(Container_Home, null), state.value === "call" && /*#__PURE__*/React.createElement(Container_Home, null), state.value === "accessibility" && /*#__PURE__*/React.createElement(Container_Home, null));
}
export default Container;