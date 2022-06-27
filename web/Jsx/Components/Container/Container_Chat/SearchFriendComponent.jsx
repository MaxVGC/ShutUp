import FriendContactCard from "./FriendContactCard.js";

var users = null;
var copy = null;

async function getFriends() {
    let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId") + "&amount=all");
    let myJson = await response.json();
    return myJson;
}

export default function SearchFriendComponent({ setShowFriends,setCurrentChat }) {
    const [queryStatus, setQueryStatus] = React.useState();
    const [value, setValue] = React.useState('');

    const input = React.useRef();
    const ref = React.useRef();
    React.useEffect(() => {
        getFriends().then(myJson => {
            users = myJson;
            copy = myJson;
            setQueryStatus(false);
        });
    }, []);

    function changeInput(e) {
        setValue(e);
    }

    return (
        <>
            <div className="searchFriendComponent">
                <div className="main">
                    <div className="search-bar">
                        <ion-icon name="search" style={{ fontSize: '25px' }}></ion-icon>
                        <input ref={input} type="text" placeholder="Busqueda por nombre" onChange={(e) => changeInput(e.target.value)} />
                        <ion-icon name="close" onClick={() => (setShowFriends(false))} style={{ fontSize: '25px' }}></ion-icon>
                    </div>
                    {users == null ? (
                        <div className="img-loading">
                            <img src="/Assets/loading.svg" alt="Loading" />
                        </div>
                    ) : (
                        <div ref={ref} className="data-search" >
                            {users.friends.map((element, key) => (
                                element.Name.toLowerCase().includes(value)?<FriendContactCard data={element} key={key} setCurrentChat={setCurrentChat} setShowFriends={setShowFriends}/>:null
                            ))}

                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
