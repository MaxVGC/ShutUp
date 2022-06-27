import ChatCard from "./Container_Chat/ChatCard.js";
import SearchFriendComponent from "./Container_Chat/SearchFriendComponent.js";
import ChatWindowComponent from "./Container_Chat/ChatWindowComponent.js";

var chats=null;

async function getChats() {
    let response = await fetch("http://localhost:8080/ShutUp/getChats?shutid=" + window.localStorage.getItem("ShutId"));
    let myJson = await response.json();
    return myJson;
}

export function Container_Chat() {

    const [showFriends,setShowFriends]=React.useState(false);
    const [currentChat,setCurrentChat]=React.useState(null);

    React.useEffect(() => {
        getChats().then(myJson => {
            chats = myJson;
            console.log(chats);
        });
    }, []);

    return (
        <div className="Container_Chat">
            <div className="row" style={{ height: '100%', margin: 0, padding: 0 }}>
                <div className="col-md-3 chats">
                    <div className="row header">
                        <h4>
                            Chats
                        </h4>
                        <ion-icon name="add-circle-outline" onClick={()=>(showFriends?setShowFriends(false):setShowFriends(true))}></ion-icon>
                        {showFriends?<SearchFriendComponent setShowFriends={setShowFriends} setCurrentChat={setCurrentChat} />:null}
                    </div>
                    <div className="row search-chat">
                        <input type="text" placeholder="Buscar conversacion" />
                    </div>
                    <div className="row conversations">
                       
                    </div>
                </div>
                <div className="col-md-9 chat-window" style={{padding:0}}>
                {currentChat!=null?<ChatWindowComponent currentChat={currentChat} />:(null)}
                </div>
            </div>
        </div>
    );
}
export default Container_Chat;