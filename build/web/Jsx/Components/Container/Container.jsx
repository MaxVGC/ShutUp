import Context from '../../Context.js';
import { ProviderContainer } from './ContainerContext.js';
import Container_Home from './Container_Home.js';
import Container_Chat from './Container_Chat.js';
import initWebSocket from './../../WebSocket.js';

export function Container() {
    const { container, actions } = React.useContext(Context);
    const [dataContainerChat,setDataContainerChat]=React.useState(
        {
            isOpened:false,
            Conversations:null,
            QueryDataUser:false
        }
    );
    const webSocket=initWebSocket();
    
    return (
        <ProviderContainer value={{ dataContainerChat,setDataContainerChat,webSocket }}>
            <div className="Container_Main">
                {container.value === "home" && <Container_Home />}
                {container.value === "chatbubbles" && <Container_Chat />}
                {container.value === "call" && <Container_Home />}
                {container.value === "accessibility" && <Container_Home />}
            </div>
        </ProviderContainer>
    );
}

export default Container;