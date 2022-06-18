import ChatCard from "./Container_Chat/ChatCard.js";

const users = {
    usuarios: [{
        image: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=ONtljJVKfdEAX8GVb0v&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT-Xe311TzUxoYoXkk324FjFl8GrRVRmwY8Jlru5W3iZjQ&oe=62B532F4',
        name:'Andres',
        LastMessage:'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        LastTransmitter:'me',
        TimeLastMessage:'19:04',
        Read:'none'
    }, {
        image: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=ONtljJVKfdEAX8GVb0v&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT-Xe311TzUxoYoXkk324FjFl8GrRVRmwY8Jlru5W3iZjQ&oe=62B532F4',
        name:'Jessica',
        LastMessage:'Adios',
        LastTransmitter:'other',
        TimeLastMessage:'19:04',
        Read:'none'
    }, {
        image: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=ONtljJVKfdEAX8GVb0v&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT-Xe311TzUxoYoXkk324FjFl8GrRVRmwY8Jlru5W3iZjQ&oe=62B532F4',
        name:'Fabio',
        LastMessage:'Que hay pa hacer?',
        LastTransmitter:'me',
        TimeLastMessage:'19:04',
        Read:'none'
    }, {
        image: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=ONtljJVKfdEAX8GVb0v&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT-Xe311TzUxoYoXkk324FjFl8GrRVRmwY8Jlru5W3iZjQ&oe=62B532F4',
        name:'Andrea',
        LastMessage:'Que mierdo',
        LastTransmitter:'other',
        TimeLastMessage:'19:04',
        Read:'none'
    }]
};

export function Container_Chat() {
    return (
        <div className="Container_Chat">
            <div className="row" style={{ height: '100%', margin: 0, padding: 0 }}>
                <div className="col-md-3 chats">
                    <div className="row header">
                        <h4>
                            Chats
                        </h4>
                        <ion-icon name="add-circle-outline" onClick={()=>console.log("ay")}></ion-icon>
                    </div>
                    <div className="row search-chat">
                        <input type="text" placeholder="Buscar conversacion" />
                    </div>
                    <div className="row conversations">
                       
                    </div>
                </div>
                <div className="col-md-9 chat-window">

                </div>
            </div>
        </div>
    );
}
export default Container_Chat;