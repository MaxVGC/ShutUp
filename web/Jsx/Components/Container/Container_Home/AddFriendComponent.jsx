import AddFriendCard from "./AddFriendCard.js";

var users = {
    notFriends: [],
    friends: []
};

var aux = false;

async function getUsers(text) {
    let response = await fetch("http://localhost:8080/ShutUp/SearchUsers?data=" + text + "&shutid=" + window.localStorage.getItem("ShutId"));
    let myJson = await response.json();
    return myJson;
}

function AddFriendComponent({ addFriendDiv, setVisibleAddFriendDiv }) {

    const [word, setWord] = React.useState();
    const [querying, setQuerying] = React.useState(false);

    const ref = React.useRef();
    const input = React.useRef();

    function toogleVisible() {
        setVisibleAddFriendDiv(false);
    }

    function querydata(e) {
        if (e.key === 'Enter') {
            setQuerying(true);
            ref.current.style.overflowY = 'hidden';
            aux = true;
            toogleresults();
            input.current.disabled = true;
            getUsers(e.target.value).then(myJson => {
                users=myJson;
                setQuerying(false);
                ref.current.style.overflowY = 'auto';
                input.current.disabled = false;
            });
        }
    }

    function toogleresults() {
        if (!aux) {
            ref.current.style.maxHeight = '0';
        } else {
            ref.current.style.maxHeight = '500px';
        }
    }

    return (
        <>
            <div className="addFriendDivComponent">
                <div className="main">
                    <div className="search-bar">
                        <ion-icon name="search" style={{ fontSize: '25px' }}></ion-icon>
                        <input ref={input} type="text" placeholder="ShutId, nombre, numero de telefono o correo" onKeyPress={e => querydata(e)} />
                        <ion-icon name="close" onClick={toogleVisible} style={{ fontSize: '25px' }}></ion-icon>
                    </div>
                    <div ref={ref} className="data-search">
                        {querying ? <img src="/Assets/loading.svg" style={{ width: '100px', height: '100px' }} /> : users.notFriends!=null ?(
                            users.notFriends.map((elements, key) => (
                                <AddFriendCard key={key} data={elements} friends={false} />
                            ))
                        ):null}
                        {querying ? null: users.friends!=null?(
                            users.friends.map((elements, key) => (
                                <AddFriendCard key={key} data={elements} friends={true} />
                            ))
                        ):null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFriendComponent;