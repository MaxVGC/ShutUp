import VideoCall from './../../VideoCall.js';

export default function Container_Call() {
    const videoCall = VideoCall();

    return (
        <div className={"ContainerCall" + " AllScreen"} style={{ margin: 0, padding: 10 }}>
            <div className={"row" + " PrincipalScreen" + " AllScreen"} style={{ margin: 0, padding: 0 }}>
                <div className=" Screens LocalScreen H100">
                    <div className="Video">
                        <video id="localVideo" autoPlay muted></video>
                    </div>
                </div>
                <div className=" Screens RemoteScreen H100">
                    <div className="Video">
                        <video id="remoteVideo" autoPlay></video>
                    </div>
                </div>
            </div>
            <div className={"VideoControls" + " AllScreen"} style={{ margin: 0, padding: 0 }}>
                <button onClick={() => (videoCall.toogleVideo())}>aaaa</button>
            </div>
        </div >
    )
}
