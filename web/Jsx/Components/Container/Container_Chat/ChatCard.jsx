


export function ChatCard(props) {

    return (
        <div className="chat_card" onClick={()=>(console.log(props))}>
            <div className="profile-image">
                <img src={props.data.image} alt="Profile image" />
            </div>
            <div className="data">
                <div className="header">
                    {props.data.name}
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <div className="data-msg">
                    <div className="last-msg">
                        {props.data.LastTransmitter==='me'?<ion-icon name="checkmark-done"></ion-icon>:null}
                        {' '+props.data.LastMessage}
                    </div>
                    <div className="time">
                        {props.data.TimeLastMessage}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;