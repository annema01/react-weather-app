
import "../styles/Weather.css";


import Infos from "./Infos";
import HeaderApp from "./HeaderApp";
import FormatedDate from "../Components/FormatedDate";
import UnitLinks from "../Components/UnitLinks";
import CurrentWeatherInfos from "./CurrentWeatherInfos";

export default function Weather(props) {


  if (props.weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container content">
          <HeaderApp
            submit={ props.handleSubmit }
            cityChange={ props.handleCityChange }
            celcius={ props.showCelcius }
            fahrenheit={ props.showFahrenheit }
            unit={ props.unit }
          />

          <div className="contentWeather">
            <div className="updateTime">
              Updated
              <span className="formatedTime">
                <FormatedDate date={ props.weatherData.date } />
              </span>
            </div>
            {/* Buttons top */ }

            <a href="#forcast" className="btn forcastAnchor">
              5 days
              <i className="bi bi-caret-down"></i>
            </a>
            <UnitLinks
              celciusFunction={ props.showCelcius }
              fahrenheitFunction={ props.showFahrenheit }
              unit={ props.unit }
              mobile="Sm"
            />

            <div>
              <CurrentWeatherInfos
                icon={ props.weatherData.icon }
                temperature={ props.weatherData.temperature }
                description={ props.weatherData.description }
                feelsLike={ props.weatherData.feelsLike }
                min={ props.weatherData.min }
                max={ props.weatherData.max }
                city={ props.weatherData.city }
                country={ props.weatherData.country }
                timezone={ props.weatherData.timezone }
              />
            </div>
          </div>
        </div>
        <div>
          <Infos data={ props.weatherData } />
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
