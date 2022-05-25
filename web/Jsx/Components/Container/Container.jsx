import Context from '../../Context.js';
import Container_Home from './Container_Home.js';

export function Container() {
    const {state,actions}=React.useContext(Context);

    return (
        <div className="Container_Main">
            {state.value==="home" &&  <Container_Home/> }
            {state.value==="chatbubbles" &&  <Container_Home/> }
            {state.value==="call" &&  <Container_Home/> }
            {state.value==="accessibility" &&  <Container_Home/> }
        </div>
    );
}

export default Container;