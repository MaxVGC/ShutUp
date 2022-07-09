import MessageCard from "./MessageCard.js";
import ChatContext from './ChatContext.js'
import ContainerContext from './../ContainerContext.js';

var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";
var dataUser = null;
var banner = "https://es.normandie-tourisme.fr/wp-content/uploads/sites/7/2020/01/8118-Mont-Saint-Michel-couleur-dautomne-%C2%A9-DaLiu-Shutterstock.com-%C2%A9-DaLiu-Shutterstock.com_.jpg";

export default function ChatWindowComponent() {

    const [visibleData, setVisibleData] = React.useState(false);
    const [queryingDataStatus, setQueryingDataStatus] = React.useState(true);
    const { dataContainerChat, setDataContainerChat, webSocket } = React.useContext(ContainerContext);
    const inputMsg = React.useRef();
    const msgContainer = React.useRef();

    function toogleVisibleData() {
        if (visibleData) {
            setVisibleData(false);
        } else {
            setVisibleData(true);
        }
    }


    function inputKeyPress(e) {
        if (e.key === 'Enter') {
            msgOut();
        }
    }

    function msgOut() {
        if (inputMsg.current.value != '' & inputMsg.current.value.trim() != "") {
            webSocket.send_msg(JSON.stringify({ ShutIdR: dataContainerChat.CurrentChat, Message: inputMsg.current.value }));
            var aux = JSON.parse(sessionStorage.getItem(dataContainerChat.CurrentChat));
            aux.Messages.push( { Message: inputMsg.current.value, current: dataContainerChat.CurrentChat, From: window.localStorage.getItem("ShutId"), Time: { $numberLong: (+new Date()) } });
            sessionStorage.setItem(dataContainerChat.CurrentChat, JSON.stringify(aux));
            setDataContainerChat({ ...dataContainerChat, UpdateChatCard: dataContainerChat.CurrentChat,CurrentConversation:aux.Messages });
        }
        inputMsg.current.value = "";
    }

    React.useEffect(() => {
        setQueryingDataStatus(false);
    }, [])

    return (
        <div className="ChatWindowComponent">
            <div className={'main ' + (visibleData ? 'active' : '')} >
                <div className="header">
                    <div className="imgBx" onClick={() => (toogleVisibleData())}>
                        <img src={image} alt="xd" />
                        {dataUser == null ? null : dataContainerChat.DataCurrentUser.CurrentState == "Online" ? <div className="state" /> : null}
                    </div>
                    <div className="dataUser" onClick={() => (toogleVisibleData())}>
                        {queryingDataStatus ? null : (<h3>{dataContainerChat.DataCurrentUser.Username}<br /><span>{dataContainerChat.DataCurrentUser.Name + " " + dataContainerChat.DataCurrentUser.Lastname + " - " + (dataContainerChat.DataCurrentUser.CurrentState == "Online" ? 'En linea' : 'Desconectado')}</span></h3>)}
                    </div>
                    <div className="actionBtns">
                        <div className="btn_custom">
                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <div className="btn_custom">
                            <ion-icon name="videocam-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="messagesContainer" ref={msgContainer}>
                    {queryingDataStatus ? null : (
                        dataContainerChat.CurrentConversation.map((element, key) => (
                            <MessageCard msg={element.Message} time={parseInt(element.Time.$numberLong)} transmitter={element.From != dataContainerChat.CurrentChat ? 'Me' : 'Other'} key={key} scroll={msgContainer.current} />
                        ))
                    )}
                </div>
                <div className="inputChatWindow">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" ref={inputMsg} onKeyPress={e => inputKeyPress(e)} />
                    <ion-icon name="send" onClick={() => (msgOut())}></ion-icon>
                </div>
            </div>
            <div className={'data ' + (visibleData ? 'active' : '')}>
                <div className="banner" style={{ backgroundImage: 'url(' + banner + ')' }}>
                    <div className="profileImg">
                        <img src={image} alt="Profile image" />
                    </div>
                </div>
                <div className="dataUser">
                    {queryingDataStatus ? null : (<h3>{dataContainerChat.DataCurrentUser.Name + " " + dataContainerChat.DataCurrentUser.Lastname}</h3>)}
                </div>
            </div>
        </div>
    )
}
