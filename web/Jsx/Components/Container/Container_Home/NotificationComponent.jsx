import NotificationFriendCard from "./NotificationFriendCard.js";

var Notifications = {
    recent: null,
    requests: null
};

async function getNotifications() {
    let response = await fetch("http://localhost:8080/ShutUp/Notifications?shutid=" + window.localStorage.getItem("ShutId"));
    let myJson = await response.json();
    return myJson;
}

getNotifications().then(myJson => {
    Notifications.requests = myJson.requests;
    Notifications.recent = null;
});

export default function NotificationComponent() {
    const [active, setActive] = React.useState(0);
    const [update, setUpdate] = React.useState(false);

    function toogleActive(e) {
        setActive(e);
    }

    function updateNotifications() {
        getNotifications().then(myJson => {
            Notifications.requests = myJson.requests;
            setUpdate(true);
        });
    }

    return (
        <>
            <div className="NotificationComponentMain">
                <div className="row NotificationComponentMain-Title">
                    <h5 style={{ color: 'white', margin: 0 }}>
                        Notificaciones
                    </h5>
                </div>
                <div className="row NotificationComponentMain-Types">
                    <div className={"type " + (active == 0 ? 'active' : '')} onClick={() => (toogleActive(0))}>
                        <span>Recientes</span>
                    </div>
                    <div className={"type " + (active == 1 ? 'active' : '')} onClick={() => (toogleActive(1))}>
                        <span>Solicitudes</span>
                    </div>
                </div>
                <div className="row NotificationComponentMain-Content">
                    {active == 0 ? (Notifications.recent != null ? (
                        Notifications.recent.map((element, key) => (
                            console.log(Notifications)
                        ))
                    ) : (
                        <div className="emptyRequest">
                            <img src="/Assets/empty.png" alt="" />
                            <span style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>No hay notificaciones nuevas</span>
                        </div>
                    )
                    ) : (Notifications.requests != null ?
                        (Notifications.requests.map((element, key) => (
                            <NotificationFriendCard data={element} key={key} setUpdate={updateNotifications} />
                        ))) : (
                            <div className="emptyRequest">
                                <img src="/Assets/empty2.png" alt="" />
                                <span style={{ color: 'white', marginTop: '10px', textAlign: 'center' }}>No hay solicitudes nuevas</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}
