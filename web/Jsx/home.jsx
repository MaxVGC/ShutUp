import Sidebar from './Components/Sidebar.js'
import { MyEstadoGlobalContext } from './GlobalVariable.js';
import ContainerMain from './Components/Container/Container.js';

const Container = document.getElementById('container-fluid');
const Root_container = ReactDOM.createRoot(Container);

Root_container.render(
    <>
        <Sidebar />
        <ContainerMain />
    </>
);
