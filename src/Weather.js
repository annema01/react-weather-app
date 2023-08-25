import React, { useState } from "react";
import Infos from "./Infos";

import FormatedDate from "./FormatedDate";
import "./Weather.css";
import axios from "axios";
import wind from "./backgroundImages/wind.svg";
import FormatedTimezone from "./FormatedTimezone";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false }); // ready used to be a state but it was put as another data from the WeatherData
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);

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
      date: new Date(response.data.dt * 1000),
      timezone: response.data.timezone,
      //infos
      airQuality: "airQua",
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      windDeg: response.data.wind.deg,
      windGust: response.data.wind.gust,
      // rain: response.data.rain.1h,
      // snow: response.data.snow.1h,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility,
      clouds: response.data.clouds.all,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
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
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="containerWeather">
          <header id="scrollUp">
            <form onSubmit={handleSubmit} className="col-md-5">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button className="btn " type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <div className="unitButtons col">
              <a href="/" className="celsius active">
                °C
              </a>
              <a href="/" className="fahrenheit ">
                °F
              </a>
            </div>
          </header>

          <div className="content">
            <div className="updateTime">
              Updated
              <span className="formatedTime">
                <FormatedDate date={weatherData.date} />
              </span>
            </div>
            {/* Buttons top */}

            <a href="#forcast" className="btn forcastAnchor">
              5 days
              <i className="bi bi-caret-down"></i>
            </a>
            <a href="/" className="celsiusSm active">
              °C
            </a>
            <a href="/" className="fahrenheitSm ">
              °F
            </a>
            <div>
              <div
                className="currentWeather"
                style={{
                  backgroundImage: `url(${wind})`,
                  backgroundSize: "75%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 10px top 25px",
                }}
              >
                <div className="degree">
                  {Math.round(weatherData.temperature)}°
                </div>
                <div className="description">{weatherData.description} </div>
                <div className="feelsLike">
                  Feels like {Math.round(weatherData.feelsLike)}°
                </div>
                <div className="minMax">
                  {Math.round(weatherData.min)}° |{" "}
                  <strong>{Math.round(weatherData.max)}°</strong>
                </div>

                <div className="positionTime">
                  <div className="position">
                    <a href="/" className="btn geoButton">
                      <i className="bi bi-geo-alt"></i>
                    </a>
                    <div className="city">
                      {weatherData.city}, {weatherData.country}
                    </div>
                  </div>
                  <div className="time ">
                    <FormatedTimezone timezone={weatherData.timezone} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Infos data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
