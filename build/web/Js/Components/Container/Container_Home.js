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
      navigator.geolocation.getCurrentPosition(data => {
        getWeather(data).then(myJson => {
          WeatherElement.current.style.backgroundImage = "url('https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/" + myJson.weather[0].icon + ".png')";
          WeatherElement.current.innerHTML = Math.round(myJson.main.temp) + "° " + myJson.weather[0].description;
        });
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "Container_Home"
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "row welcome-title"
  }, /*#__PURE__*/React.createElement("h2", null, messageDay, ' Andres'), /*#__PURE__*/React.createElement("div", {
    ref: WeatherElement,
    className: "icon-weather"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row profile-container"
  }, /*#__PURE__*/React.createElement(ProfileComponent, null))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "pruebaScroll",
    className: "row friend-container"
  }, /*#__PURE__*/React.createElement(FriendsComponent, null)), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      margin: 0,
      padding: '0 10px 10px 10px',
      height: 'calc(100% - 197px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6",
    style: {
      padding: 0,
      paddingRight: '5px'
    }
  }, /*#__PURE__*/React.createElement(NotificationComponent, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6",
    style: {
      padding: 0,
      paddingLeft: '5px'
    }
  })))));
}

export default Container_Home;