import FriendContactCard from "./FriendContactCard.js";

var users = null;
var copy = null;

async function getFriends() {
    let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId") + "&amount=all");
    let myJson = await response.json();
    return myJson;
}

export default function SearchFriendComponent({ setShowFriends }) {
    const [queryStatus, setQueryStatus] = React.useState();
    const [value, setValue] = React.useState();

    const input = React.useRef();
    const ref = React.useRef();
    React.useEffect(() => {
        getFriends().then(myJson => {
            users = myJson;
            copy = users;
            setQueryStatus(false);
        });
    }, []);

    function changeInput(e) {
        console.log(e);
        if (e == '') {
            users=copy;
            console.log(users);
            console.log(copy);
            setValue(e);
        } else {
            users.friends = users.friends.filter(function (el) {
                return el.Name.toLowerCase().indexOf(e.toLowerCase()) > -1;
            })
            setValue(e);
        }
    }

    return (
        <>
            <div className="searchFriendComponent">
                <div className="main">
                    <div className="search-bar">
                        <ion-icon name="search" style={{ fontSize: '25px' }}></ion-icon>
                        <input ref={input} type="text" placeholder="ShutId, nombre, numero de telefono o correo" onChange={(e) => changeInput(e.target.value)} />
                        <ion-icon name="close" onClick={() => (setShowFriends(false))} style={{ fontSize: '25px' }}></ion-icon>
                    </div>
                    {users == null ? (
                        <div className="img-loading">
                            <img src="/Assets/loading.svg" alt="Loading" />
                        </div>
                    ) : (
                        <div ref={ref} className="data-search" >
                            {users.friends.map((element, key) => (
                                <FriendContactCard data={element} key={key} />
                            ))}

                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
