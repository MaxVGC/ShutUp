import Sidebar from './Components/Sidebar.js';
const Sidebar_element = document.getElementById('sidebar-custom');
const Sidebar_container = ReactDOM.createRoot(Sidebar_element);
Sidebar_container.render( /*#__PURE__*/React.createElement(Sidebar, null));