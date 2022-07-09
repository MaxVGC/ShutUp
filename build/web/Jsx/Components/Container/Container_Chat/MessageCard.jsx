
export default function MessageCard({ msg, transmitter, scroll,time }) {
    var currentTime = new Date(time);
    React.useEffect(() => {
        scroll.scrollTop = scroll.scrollHeight;
    }, []);

    return (

        <div className={'msgCardContainer ' + transmitter}>
            <div className={'msgCard ' + transmitter}>
                <span>
                    {msg}
                </span>
            </div>
            <div className="time">
                {currentTime.getHours() + ':' + currentTime.getMinutes()}
            </div>
        </div>
    )
}
