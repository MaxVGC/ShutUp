//var FriendRequests=null;
import RequestCard from "./RequestCard.js";

var FriendRequests = {
    request: [{
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-1/201990428_4331801176852187_1249459949626412878_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeErfmR8vagZAj-Vz3fmm0MhY-dJB-ohgV1j50kH6iGBXal8V5dFM1jugGXsEGT2-pbtUZBvJkrBufH85A6LWv1g&_nc_ohc=ONtljJVKfdEAX8GVb0v&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT-Xe311TzUxoYoXkk324FjFl8GrRVRmwY8Jlru5W3iZjQ&oe=62B532F4',
        Name: 'Andres Marles',
        ShutId: 'ABC123'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }, {
        imgProfile: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t1.6435-9/162521819_2616814765286056_7187524221133330623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIMGjPtRerBfms9Z8D0TPG1IAI1jsjbZ3UgAjWOyNtnbMjUbd-Hs61T2v9hxKs9uVYNfEEQdIr2Zwb_tQAvV_3&_nc_ohc=1YPjkdgavSwAX-yWVCM&_nc_ht=scontent.fvvc1-1.fna&oh=00_AT_2v9sxq8DtXixnTMpeSyweFaymD5s78LAfmal83JNVHA&oe=62CD139C',
        Name: 'Ferney Ramos',
        ShutId: 'ABC124'
    }
    ]
};

export default function NotificationComponent() {
    return (
        <>
            <div className="NotificationComponentMain">
                <div className="row NotificationComponentMain-Title">
                    <h4 style={{ color: 'white' }}>
                        Notificaciones
                    </h4>
                </div>
                <div className="row NotificationComponentMain-Title">
                    <h6 style={{ color: 'white' }}>
                        Solicitudes
                    </h6>
                </div>
                <div className="row NotificationComponentMain-FriendRequest" style={{padding:0,margin:0}}>
                    {
                        FriendRequests.request.map((elements, key) => (
                            <RequestCard key={key} data={elements}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
