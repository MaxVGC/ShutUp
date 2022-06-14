
export default function RequestCard({ data }) {
    const ref = React.useRef();

    return (
        <div className="NotificationComponentMain-requestCard" ref={ref}>
            <ion-icon class="icon" name="person-add"></ion-icon>
            <div className="imgProfile" style={{backgroundImage:'url('+data.imgProfile+')',backgroundSize:'cover'}}>
            </div>
            <div className="data">
                <span style={{color:'white'}}>¡{data.Name} te ha enviado una solicitud de amistad!</span>
                <div className="btns">
                    <ion-icon name="checkmark-circle" onClick={()=>console.log(data.ShutId)}></ion-icon>
                    <ion-icon name="close-circle" onClick={()=>(ref.current.remove())}></ion-icon>
                </div>
            </div>
        </div>
    )
}
