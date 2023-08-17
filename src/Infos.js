import React, { useState } from "react"
import FormatedHour from "./FormatedHour"
import "./Infos.css"
import axios from "axios"


export default function Infos() {

  const [ ready, setReady ] = useState(false);
  const [ weatherInfo, setWeatherInfo ] = useState(null);
  // let lon = { weatherInfo.longitude };
  // let lat = { weatherInfo.latitude };
  // let apiUrlPollution = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
  // axios.get(apiUrlPollution).then(handleResponse);
  function handleResponse(response) {



    setWeatherInfo({
      airQuality: "airQua",
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      windDeg: response.data.wind.deg,
      windGust: response.data.wind.gust,
      rain: response.data.rain,
      snow: response.data.snow,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility,
      clouds: response.data.clouds.all,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: response.data.sys.sunset,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,

    });




    setReady(true);

  }
  console.log({ weatherInfo });

  if (ready) {
    return (
      <div className='Infos'>
        <svg
          className='background'
        >
          <circle
            r='1120'
            cx='50%'
          />
        </svg>
        <div
          id='infos'
          className='container'
        >
          <div className='row'>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-cloud-haze2'></i>
              <div className='title'>Air quality</div>
              <div className='data text'>
                { weatherInfo.airQuality }<span className='unit'></span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-droplet'></i>
              <div className='title'>Humidity</div>
              <div className='data integer'>
                { weatherInfo.humidity }<span className='unit'>%</span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-wind'></i>
              <div className='title'>Wind speed</div>
              <div className='data integer'>
                <div>
                  <svg
                    className='windDirection'
                    style={ {
                      transform: `rotate(${weatherInfo.windDeg}deg)`,
                    }
                    }
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z' />
                  </svg>
                </div>
                { Math.round(weatherInfo.windSpeed) }<span className='unit'>m/s</span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-tornado'></i>
              <div className='title'>Wind gust</div>
              <div className='data integer'>
                { Math.round(weatherInfo.windGust) }<span className='unit'>m/s</span>
              </div>
            </div>


            <div className='col-6 col-md-4'>
              <i className='icon bi bi-umbrella'></i>
              <div className='title'>Rain</div>
              {/* ALTERNATIVE SNOW */ }
              <i className='icon bi bi-snow hidden'></i>
              <div className='title hidden'>Snow</div>
              {/* ALTERNATIVE SNOW */ }
              <i className='icon bi bi-cloud-hail hidden'></i>
              <div className='title hidden'>Precipitation</div>
              {/* normal data*/ }
              <div className='data integer'>
                { weatherInfo.rain }{ weatherInfo.snow }<span className='unit'>mm</span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-arrow-down-up'></i>

              <div className='title'>Pressure</div>
              <div className='data integer'>
                { weatherInfo.pressure }<span className='unit'>hPa</span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-eye'></i>
              <div className='title'>Visibility</div>
              <div className='data integer'>
                { weatherInfo.visibility }<span className='unit'>m</span>
              </div>
              {/* ALTERNATIVE NO LIMIT */ }
              <div className="hidden">
                <div className='data text '>
                  No limit<span className='unit'></span>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-clouds'></i>
              <div className='title'>Clouds</div>
              <div className='data integer'>
                { weatherInfo.clouds }<span className='unit'>%</span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-sunrise'></i>
              <div className='title'>Sunrise</div>
              <div className='data text'>
                <FormatedHour date={ weatherInfo.sunrise } /><span className='unit'></span>
              </div>
            </div>
            <div className='col-6 col-md-4'>
              <i className='icon bi bi-sunset'></i>
              <div className='title'>Sunset</div>
              <div className='data text'>
                { weatherInfo.sunset }<span className='unit'></span>
              </div>
            </div>

          </div>
        </div>
        <div id="forcast"></div>
      </div >
    )
  } else {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let city = "Montreal";
    let country = "CA";
    let unit = "metric";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=${unit}`
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}
