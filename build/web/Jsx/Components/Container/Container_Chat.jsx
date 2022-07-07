import ChatCard from "./Container_Chat/ChatCard.js";
import { ProviderChat } from './Container_Chat/ChatContext.js'
import SearchFriendComponent from "./Container_Chat/SearchFriendComponent.js";
import ChatWindowComponent from "./Container_Chat/ChatWindowComponent.js";

async function getConversations() {
    let response = await fetch("http://localhost:8080/ShutUp/getConversations?shutid=" + window.localStorage.getItem("ShutId") + "&range=20&friend=none");
    let myJson = await response.json();
    return myJson;
}

export function Container_Chat() {

    const [showFriends, setShowFriends] = React.useState(false);
    const [currentChat, setCurrentChat] = React.useState(null);
    const [chats, setChats] = React.useState(null);
    const [updateChat,setUpdateChat]=React.useState(null);


    React.useEffect(() => {
        getConversations().then(myJson => {
            setChats(myJson);
        });
    }, []);

    return (
        <ProviderChat value={{updateChat,setUpdateChat}}>
            <div className="Container_Chat">
                <div className="row" style={{ height: '100%', margin: 0, padding: 0 }}>
                    <div className="col-md-3 chats">
                        <div className="row header">
                            <h4>
                                Chats
                            </h4>
                            <ion-icon name="add-circle-outline" onClick={() => (showFriends ? setShowFriends(false) : setShowFriends(true))}></ion-icon>
                            {showFriends ? <SearchFriendComponent setShowFriends={setShowFriends} setCurrentChat={setCurrentChat} /> : null}
                        </div>
                        <div className="row search-chat">
                            <input type="text" placeholder="Buscar conversacion" />
                        </div>
                        <div className="row conversations">
                            {chats == null ? (
                                null
                            ) : (
                                chats.Conversations.map((element, key) => (
                                    <ChatCard key={key} data={element} setCurrentChat={setCurrentChat} />
                                ))
                            )}
                        </div>
                    </div>
                    <div className="col-md-9 chat-window" style={{ padding: 0 }}>
                        {currentChat != null ? (<ChatWindowComponent currentChat={currentChat} />) : null}
                    </div>
                </div>
            </div>
        </ProviderChat>
    );
}
export default Container_Chat;