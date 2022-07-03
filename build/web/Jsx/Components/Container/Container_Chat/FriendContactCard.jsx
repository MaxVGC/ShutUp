var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";


export default function FriendContactCard({ data,setCurrentChat,setShowFriends }) {


    return (
        <>
            <div className={'FriendContactCard'}  >
                <div className="imgBx">
                    <img src={image} alt="xd" />
                </div>
                <div className="data">
                    <h2>{data.Name}<br /><span>{data.Lastname}</span></h2>
                </div>
                <div className="actionBtns">
                    <div className="btn_custom">
                        <ion-icon name="call"></ion-icon>
                    </div>
                    <div className="btn_custom" onClick={()=>(setCurrentChat(data.ShutId),setShowFriends(false))}>
                        <ion-icon name="chatbubble"></ion-icon>
                    </div>
                </div>
            </div>
        </>
    )
}
