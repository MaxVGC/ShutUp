import Sidebar from './Components/Sidebar.js'
import ContainerMain from './Components/Container/Container.js';

import useGlobal from './GlobalVariable.js';
import Context from './Context.js';

const Container = document.getElementById('container-fluid');
const Root_container = ReactDOM.createRoot(Container);

var miStorage = window.localStorage;
miStorage.setItem('ShutId', 'MAX3612');

const Index = () => {
    const store = useGlobal();
    return (
        <Context.Provider value={store}>
            <Sidebar />
            <ContainerMain />
        </Context.Provider>
    )
}

Root_container.render(<Index/>);
