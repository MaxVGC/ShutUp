import FriendsComponent from "./Container_Home/FriendsComponent.js";
import ProfileComponent from "./Container_Home/ProfileComponent.js";

var messageDay;
var timeDay;
var clima = {
    icon: '',
    temp: ''
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition();
    //navigator.geolocation.getCurrentPosition(getWeather);
}

async function getWeather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&lang=es&units=metric&appid=04e83853d8074dbe2cc208386d78a2c3");
    let myJson = await response.json();
    clima.icon = "url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + myJson.weather[0].icon + ".png')";
    clima.temp = Math.round(myJson.main.temp) + "° " + myJson.weather[0].description;
}

function salute() {
    var fecha = new Date();
    var hora = fecha.getHours();
    if (hora >= 0 && hora < 12) {
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
        setTimeout(function () {
            WeatherElement.current.style.backgroundImage = clima.icon;
            WeatherElement.current.innerHTML = clima.temp;
        }, 1000);
    }, []);

    return (
        <div className="Container_Home">
            <div ref={ref} className="row welcome-title">
                <h2>{messageDay}{' Andres'}</h2>
                <div ref={WeatherElement} className="icon-weather">
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" style={{ padding: 0 }}>
                    <div className="row profile-container">
                        <ProfileComponent />
                    </div>
                </div>
                <div className="col-md-8" style={{ padding: 0 }}>
                    <div className="row friend-container">
                        <FriendsComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container_Home;

