export default function AddFriendCard({ data,friends }) {
    const [send,setSend]=React.useState(false);

    async function addFriendQuery(user){
        let response = await fetch("http://localhost:8080/ShutUp/SendFriendRequest?from=" + window.localStorage.getItem("ShutId")+"&to="+user);
    }

    return (
        <div className="addFriendCard">
            <div className="img-friend" style={{backgroundImage:'url(/Assets/photo.jpg)'}}>    
            </div>
            <div className="data" style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                <div className="name" style={{fontSize:'24px',color:'white'}}>
                    {data.Name + " " + data.Lastname}
                </div>
                <div className="user-info" style={{display:'flex'}}>
                    <div className="ShutId" style={{display:'flex',flexDirection:'column',marginRight:'10px'}}>
                        <span  style={{fontSize:'12px'}}>ShutId</span>
                        <span>{data.ShutId}</span>
                    </div>
                    <div className="Username" style={{display:'flex',flexDirection:'column'}}>
                        <span style={{fontSize:'12px'}}>Username</span>
                        <span>{data.Username}</span>
                    </div>
                </div>
            </div>
            <div className="btn-add">
                {send?<ion-icon name="time"></ion-icon>:friends?(data.AcceptedRequest?<ion-icon name="people"></ion-icon>:<ion-icon name="time"></ion-icon>):<ion-icon  onClick={()=> (setSend(true),addFriendQuery(data.ShutId))} name="add-circle"></ion-icon>}
            </div>
        </div>
    )
}
