import React, { useEffect, useState } from "react";

import "./styles/App.css";
import Weather from "./Containers/Weather";
import Forcast from "./Containers/Forcast";
import Footer from "./Containers/Footer";

import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false }); // ready used to be a state but it was put as another data from the WeatherData
  const [city, setCity] = useState("montreal");
  const [unit, setUnit] = useState("metric");

  const apiKey = "aa09763d916df0424c840d55bfc2d2c9";

  function handleResponse(response) {
    console.log(response.data);
    let rain = response.data.rain && response.data.rain["1h"];
    if (rain === undefined) {
      rain = "-";
    }
    let snow = response.data.snow && response.data.snow["1h"];
    if (snow === undefined) {
      snow = "-";
    }

    setWeatherData({
      //current
      ready: true,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      //icon: response.data.weather[0].icon,
      icon: "03n",

      date: new Date(response.data.dt * 1000),
      timezone: response.data.timezone,
      //infos
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      windDeg: response.data.wind.deg,
      windGust: response.data.wind.gust,
      rain: rain,
      snow: snow,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility,
      clouds: response.data.clouds.all,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      error: response.data.cod,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value); // setCity to the value of the search field
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, [unit]); //dependency array

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleGeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success);
  }

  function changeToNightTheme(primary, secondary, text, primaryBackground) {
    if (weatherData.ready) {
      let iconCodeWithNoDigits = weatherData.icon.replace(/\d+/g, "");
      console.log(iconCodeWithNoDigits);

      if (iconCodeWithNoDigits === "n") {
        document.documentElement.style.setProperty("--primary-color", primary);
        document.documentElement.style.setProperty(
          "--secondary-color",
          secondary
        );
        document.documentElement.style.setProperty("--text-color", text);
        document.documentElement.style.setProperty(
          "--primary-background-color",
          primaryBackground
        );
        document.documentElement.style.setProperty(
          "--gradient-vertical",
          secondary
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  useEffect(() => {
    changeToNightTheme("#173459", "#3C6AA6", "#161616", "#33396D");
    // eslint-disable-next-line
  }, [weatherData.ready]);

  return (
    <div className="App g-0">
      <div className="row g-0 contentAll">
        <div className="col-md-7">
          <Weather
            weatherData={weatherData}
            handleSubmit={handleSubmit}
            handleCityChange={handleCityChange}
            showFahrenheit={showFahrenheit}
            showCelcius={showCelcius}
            unit={unit}
            handleGeolocation={handleGeolocation}
            apiKey={apiKey}
          />
        </div>
        <div className=" col-md-5 g-0 forcastSection">
          <Forcast
            longitude={weatherData.longitude}
            latitude={weatherData.latitude}
            unit={unit}
            apiKey={apiKey}
          />
        </div>

        <div className="TEMPORAIRE"></div>

        <Footer />
      </div>
      <a href="#scrollUp" className="btn scrollUp">
        <i className="bi bi-caret-up-fill"></i>
      </a>
    </div>
  );
}

export default App;
