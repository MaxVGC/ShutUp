import FriendsComponent from "./Container_Home/FriendsComponent.js";
import ProfileComponent from "./Container_Home/ProfileComponent.js";
import NotificationComponent from "./Container_Home/NotificationComponent.js";

var messageDay;
var timeDay;

async function getWeather(position) {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&lang=es&units=metric&appid=04e83853d8074dbe2cc208386d78a2c3");
    const myJson = await response.json();
    return myJson;
}

function salute() {
    var fecha = new Date();
    var hora = fecha.getHours();
    if (hora >= 0 && hora < 4) {
        messageDay = "Buenas noches";
        timeDay = "nightfall";
    }
    if (hora >= 4 && hora < 12) {
        messageDay = "Buenos días";
        timeDay = "sunrise";
    }
    if (hora >= 12 && hora < 19) {
        messageDay = "Buenas tardes";
        timeDay = "sunset";
    }

    if (hora >= 19 && hora < 24) {
        messageDay = "Buenas noches";
        timeDay = "nightfall";
    }
}

function Container_Home() {
    const ref = React.useRef();
    const WeatherElement = React.useRef();

    salute();

    React.useEffect(() => {
        ref.current.classList.add(timeDay);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data)=>{
                getWeather(data).then(myJson => {
                    WeatherElement.current.style.backgroundImage = "url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + myJson.weather[0].icon + ".png')";
                    WeatherElement.current.innerHTML = Math.round(myJson.main.temp) + "° " + myJson.weather[0].description;
                });
            });
        }
    }, []);

    return (
        <div className="Container_Home">
            <div ref={ref} className="row welcome-title">
                <h2>{messageDay}{' Andres'}</h2>
                <div ref={WeatherElement} className="icon-weather">
                </div>
            </div>
            <div className="row main-content">
                <div className="col-md-4" style={{ padding: 0 }}>
                    <div className="row profile-container">
                        <ProfileComponent />
                    </div>
                </div>
                <div className="col-md-8" style={{ padding: 0 }}>
                    <div id="pruebaScroll" className="row friend-container">
                        <FriendsComponent />
                    </div>
                    <div className="row" style={{ margin: 0, padding: '0 10px 10px 10px', height: 'calc(100% - 197px)' }}>
                        <div className="col-md-4" style={{ padding: 0, paddingRight: '5px' }}>
                            <NotificationComponent />
                        </div>
                        <div className="col-md-8" style={{ padding: 0, paddingLeft: '5px' }}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container_Home;

