
var image = "https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=g6Ud48jrogoAX8xHjlq&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT9li9zhnyFOlF34C2mgZ5oUTVEK_fDk0tAtUXzg8HSWNA&oe=62D4D6F4";

async function sendResponseRequest(id, action) {
  let response = await fetch("http://localhost:8080/ShutUp/ResponseFriendRequest?shutid=" + window.localStorage.getItem("ShutId") + "&id=" + id + "&action=" + action);
  let myJson = await response.json();
  return myJson;
}

export default function NotificationFriendCard({ data, setUpdate }) {
  const ref = React.useRef();


  return (

    <div className="Notification FriendRequest" ref={ref}>
      <div className="imgProfile">
        <img src={image} alt="" width="60px" height="60px" style={{ borderRadius: '10px' }} />
      </div>
      <div className="content">
        <div className="name">
          <span>{data.Name}</span>
        </div>
        <div className="buttons">
          <div className="add" onClick={() => (ref.current.style.display="none",sendResponseRequest(data.Id,"add").then(myJson => {setUpdate()}))}>
          <ion-icon name="checkmark-sharp" style={{ marginRight: '10px' }}></ion-icon>
          <span>Aceptar</span>
        </div>
        <div className="deny" onClick={() => (ref.current.style.display="none",sendResponseRequest(data.Id,"deny").then(myJson => {setUpdate()}))}>
          <ion-icon name="close"></ion-icon>
        </div>
      </div>
    </div>
      </div >
    
  )
}
