
import AddFriendComponent from "./AddFriendComponent.js";

var users = {
    friends: []
};

async function getUsers() {
    let response = await fetch("http://localhost:8080/ShutUp/getFriends?shutid=" + window.localStorage.getItem("ShutId"));
    let myJson = await response.json();
    return myJson;
}


function FriendsComponent() {
    const [addFriendDiv, setVisibleAddFriendDiv] = React.useState(false);
    const [friendsData, setFriendsData] = React.useState(false);


    React.useEffect(() => {
        getUsers().then(myJson => {
            users=myJson;
            setFriendsData(true);
        });
    }, []);


    function setVisibleAddFriend_Div() {
        if (addFriendDiv) {
            setVisibleAddFriendDiv(false);
        } else {
            setVisibleAddFriendDiv(true);
        }
    }

    return (
        <>
            <div className="row friends-title">
                <h4 style={{ color: 'white' }}>
                    Amigos
                </h4>
            </div>
            <div className="row friends">
                <div className="add-friend" >
                    <ion-icon name="person-add" onClick={() => { setVisibleAddFriend_Div() }}></ion-icon>
                    {addFriendDiv ? <AddFriendComponent addFriendDiv={addFriendDiv} setVisibleAddFriendDiv={setVisibleAddFriendDiv} /> : null}
                </div>
                {friendsData ? (
                    users.friends.map((elements, key) => (
                        <div className="card-friend" style={{marginLeft:'12px',backgroundImage:'url(/Assets/photo.jpg)'}} key={key}>
                            {elements.CurrentState!="Online"?<ion-icon name="radio-button-off"></ion-icon>:<ion-icon name="radio-button-on"></ion-icon>}
                        </div>
                    )) 
                ): <img src="/Assets/loading.svg" style={{ width: '100px', height: '100px' }} />}
            </div>
        </>
    )
}

export default FriendsComponent;
