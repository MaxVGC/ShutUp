var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";

export default function AddFriendCard({ data,friends }) {
    const [send,setSend]=React.useState(false);

    async function addFriendQuery(user){
        let response = await fetch("http://localhost:8080/ShutUp/SendFriendRequest?from=" + window.localStorage.getItem("ShutId")+"&to="+user);
    }

    return (
        <div className="addFriendCard">
            <div className="img-friend" style={{backgroundImage:'url('+image+')'}}>    
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
