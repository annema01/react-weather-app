import React, { useEffect, useState } from "react";

import "./styles/App.css";
import Weather from "./Containers/Weather";
import Forcast from "./Containers/Forcast";
import Footer from "./Containers/Footer";

import axios from "axios";


function App() {


  const [ weatherData, setWeatherData ] = useState({ ready: false }); // ready used to be a state but it was put as another data from the WeatherData
  const [ city, setCity ] = useState("montreal");
  const [ unit, setUnit ] = useState("metric");

  const apiKey = "aa09763d916df0424c840d55bfc2d2c9";

  function handleResponse(response) {

    console.log(response.data);
    let rain = response.data.rain && response.data.rain[ "1h" ];
    if (rain === undefined) {
      rain = "-";
    }
    let snow = response.data.snow && response.data.snow[ "1h" ];
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
      description: response.data.weather[ 0 ].description,
      icon: response.data.weather[ 0 ].icon,
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

  function handleError(code) {

    if (code === 404) {
      setCity("Montreal")
      prompt("error")
    }
    else {
      return null;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value); // setCity to the value of the search field
  }

  function search() {
    handleError(weatherData.error);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);


  }

  useEffect(() => {
    //code i want to run
    search();

    // return function (optionnal)
    // eslint-disable-next-line
  }, [ unit ]); //dependency array

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }


  return (
    <div className="App g-0">
      <div className="row g-0 contentAll">
        <div className="col-md-7">
          <Weather
            weatherData={ weatherData }
            handleSubmit={ handleSubmit }
            handleCityChange={ handleCityChange }
            showFahrenheit={ showFahrenheit }
            showCelcius={ showCelcius }
            unit={ unit }
          />
        </div>
        <div className=" col-md-5 g-0 forcastSection">
          <Forcast
            longitude={ weatherData.longitude }
            latitude={ weatherData.latitude }
            unit={ unit }
            apiKey={ apiKey }

          />
        </div>
        <Footer />
      </div>
      <a href="#scrollUp" className="btn scrollUp">
        <i className="bi bi-caret-up-fill"></i>
      </a>
    </div>
  );
}

export default App;
