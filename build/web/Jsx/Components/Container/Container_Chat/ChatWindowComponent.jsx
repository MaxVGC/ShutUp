var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";
var dataUser = null;

async function getDataUser(shutid) {
    let response = await fetch("http://localhost:8080/ShutUp/getDataUser?shutid=" + shutid + "");
    let myJson = await response.json();
    return myJson;
}

export default function ChatWindowComponent({ currentChat }) {
    const [visibleData, setVisibleData] = React.useState(false);
    const [queryingDataStatus, setQueryingDataStatus] = React.useState(true);
    const [queryingChat, setQueryingChat] = React.useState(true);

    function toogleVisibleData() {
        if (visibleData) {
            setVisibleData(false);
        } else {
            setVisibleData(true);
        }
    }

    React.useEffect(() => {
        getDataUser(currentChat).then(myJson => {
            dataUser = myJson;
            console.log(dataUser);
            setQueryingDataStatus(false);
        });
    }, []);

    return (
        <div className="ChatWindowComponent">
            <div className={'main ' + (visibleData ? 'active' : '')} >
                <div className="header">
                    <div className="imgBx" onClick={() => (toogleVisibleData())}>
                        <img src={image} alt="xd" />
                        {dataUser == null ? null : dataUser.data[0].CurrentState == "Online" ? <div className="state" /> : null}
                    </div>
                    <div className="dataUser" onClick={() => (toogleVisibleData())}>
                        {queryingDataStatus ? null : (<h3>{dataUser.data[0].Username}<br /><span>{dataUser.data[0].Name + " " + dataUser.data[0].Lastname + " - " + (dataUser.data[0].CurrentState == "Online" ? 'En linea' : 'Desconectado')}</span></h3>)}
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
                <div className="messagesContainer">

                </div>
                <div className="inputChatWindow">
                    
                </div>
            </div>
            <div className={'data ' + (visibleData ? 'active' : '')}>

            </div>
        </div>
    )
}
