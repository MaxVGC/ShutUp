
export default function MessageCard({ msg, transmitter, scroll }) {
    var currentTime = new Date();

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
