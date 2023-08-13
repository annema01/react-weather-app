import React, { useState } from "react";
import FormatedDate from "./FormatedDate"

import "./Weather.css"
import axios from "axios"
import img from "./backgroundImages/fog.svg"


export default function Weather() {
  const [ ready, setReady ] = useState(false);
  const [ weatherData, setWeatherData ] = useState(null);
  function handleResponse(response) {
    console.log(response.data);


    setWeatherData({
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[ 0 ].description,
      date: new Date(response.data.dt * 1000),


    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className='Weather'>

        <div className='container'>
          <header id="scrollUp">
            <form className="col-md-5">
              <input
                type='search'
                placeholder='Enter a city..'
                autoFocus='on'
              />
              <button
                className='btn '
                type='submit'
              >
                <i className='bi bi-search'></i>
              </button>
            </form>
            <div className="unitButtons col">
              <a
                href='/'
                className='celsius active'
              >
                °C
              </a>
              <a
                href='/'
                className='fahrenheit '
              >
                °F
              </a>
            </div>
          </header>

          <div className="content">
            <div className='updateTime'>Updated<span className="formatedTime"><FormatedDate date={ weatherData.date } /></span></div>
            {/* Buttons top */ }

            <a
              href='#forcast'
              className='btn forcastAnchor'
            >
              5 days
              <i className='bi bi-caret-down'></i>
            </a>
            <a
              href='/'
              className='celsiusSm active'
            >
              °C
            </a>
            <a
              href='/'
              className='fahrenheitSm '
            >
              °F
            </a>
            <img className="background " src={ img } alt="Sunny" />

            <div className='currentWeather'>
              <div className='degree'>{ Math.round(weatherData.temperature) }°</div>
              <div className='description'>{ weatherData.description } </div>
              <div className='feelsLike'>Feels like { Math.round(weatherData.feelsLike) }°</div>
              <div className='minMax'>
                { Math.round(weatherData.min) }° | <strong>{ Math.round(weatherData.max) }°</strong>
              </div>

              <div className='positionTime'>
                <div className='position'>
                  <a
                    href='/'
                    className='btn geoButton'
                  >
                    <i className='bi bi-geo-alt'></i>
                  </a>
                  <div className='city'>{ weatherData.city }, { weatherData.country }</div>
                </div>
                <div className='time '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  } else {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let city = "Paris";
    let country = "FR";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=${unit}`
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }

}
