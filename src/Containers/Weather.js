import React, { useEffect, useState } from "react";

import "../styles/Weather.css";

import axios from "axios";

import Infos from "./Infos";
import HeaderApp from "./HeaderApp";
import FormatedDate from "../Components/FormatedDate";
import UnitLinks from "../Components/UnitLinks";
import CurrentWeatherInfos from "./CurrentWeatherInfos";

export default function Weather(props) {
  const [ weatherData, setWeatherData ] = useState({ ready: false }); // ready used to be a state but it was put as another data from the WeatherData
  const [ city, setCity ] = useState(props.defaultCity);
  const [ unit, setUnit ] = useState("metric");

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
      airQuality: "airQua", //need the air polution api
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
      coordinates: response.data.coord,
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container content">
          <HeaderApp
            submit={ handleSubmit }
            cityChange={ handleCityChange }
            celcius={ showCelcius }
            fahrenheit={ showFahrenheit }
            unit={ unit }
          />

          <div className="contentWeather">
            <div className="updateTime">
              Updated
              <span className="formatedTime">
                <FormatedDate date={ weatherData.date } />
              </span>
            </div>
            {/* Buttons top */ }

            <a href="#forcast" className="btn forcastAnchor">
              5 days
              <i className="bi bi-caret-down"></i>
            </a>
            <UnitLinks
              celciusFunction={ showCelcius }
              fahrenheitFunction={ showFahrenheit }
              unit={ unit }
              mobile="Sm"
            />

            <div>
              <CurrentWeatherInfos
                icon={ weatherData.icon }
                temperature={ weatherData.temperature }
                description={ weatherData.description }
                feelsLike={ weatherData.feelsLike }
                min={ weatherData.min }
                max={ weatherData.max }
                city={ weatherData.city }
                country={ weatherData.country }
                timezone={ weatherData.timezone }
              />
            </div>
          </div>
        </div>
        <div>
          <Infos data={ weatherData } />
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
