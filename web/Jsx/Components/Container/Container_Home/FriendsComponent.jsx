
import AddFriendComponent from "./AddFriendComponent.js";


function FriendsComponent() {
    const [addFriendDiv, setVisibleAddFriendDiv] = React.useState(false);

    function setVisibleAddFriend_Div(){
        if(addFriendDiv){
            setVisibleAddFriendDiv(false);
        }else{
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
                    <ion-icon name="person-add" onClick={() => {setVisibleAddFriend_Div()}}></ion-icon>
                    {addFriendDiv?<AddFriendComponent addFriendDiv={addFriendDiv} setVisibleAddFriendDiv={setVisibleAddFriendDiv}/>:null}
                </div>
            </div>
        </>
    )
}

export default FriendsComponent;
