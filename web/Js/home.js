import Sidebar from './Components/Sidebar.js';
import { MyEstadoGlobalContext } from './GlobalVariable.js';
import ContainerMain from './Components/Container/Container.js';
const Container = document.getElementById('container-fluid');
const Root_container = ReactDOM.createRoot(Container);
Root_container.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sidebar, null), /*#__PURE__*/React.createElement(ContainerMain, null)));