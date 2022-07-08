import Context from '../../Context.js';
import { ProviderContainer } from './ContainerContext.js';
import Container_Home from './Container_Home.js';
import Container_Chat from './Container_Chat.js';

export function Container() {
    const { container, actions } = React.useContext(Context);
    const [dataContainerChat,setDataContainerChat]=React.useState(
        {
            isOpened:false,
            Conversations:null,
            QueryDataUser:false
        }
    );
    return (
        <ProviderContainer value={{ dataContainerChat,setDataContainerChat }}>
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