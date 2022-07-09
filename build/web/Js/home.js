import Sidebar from './Components/Sidebar.js';
import ContainerMain from './Components/Container/Container.js';
import useGlobal from './GlobalVariable.js';
import Context from './Context.js';
const Container = document.getElementById('container-fluid');
const Root_container = ReactDOM.createRoot(Container);
var miStorage = window.localStorage;
miStorage.setItem('ShutId', new URLSearchParams(location.search).get("uuid"));

const Index = () => {
  const store = useGlobal();
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: store
  }, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement(ContainerMain, null));
};

Root_container.render( /*#__PURE__*/React.createElement(Index, null));