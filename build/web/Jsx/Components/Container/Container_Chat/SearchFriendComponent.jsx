var users=null;

async function getFriends() {
    let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId")+"&amount=all");
    let myJson = await response.json();
    return myJson;
}

export default function SearchFriendComponent({setShowFriends}) {

    const input = React.useRef();
    const ref=React.useRef();
    React.useEffect(() => {
        getFriends().then(myJson => {
            users = myJson;
        });
    }, []);

    return (
        <>
            <div className="searchFriendComponent">
                <div className="main">
                    <div className="search-bar">
                        <ion-icon name="search" style={{ fontSize: '25px' }}></ion-icon>
                        <input ref={input} type="text" placeholder="ShutId, nombre, numero de telefono o correo" onKeyPress={e => querydata(e)} />
                        <ion-icon name="close" onClick={()=>(setShowFriends(false))} style={{ fontSize: '25px' }}></ion-icon>
                    </div>
                    <div ref={ref} className="data-search">
                        {users==null?(
                            console.log("xd")
                        ):(
                            console.log("xd")
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
