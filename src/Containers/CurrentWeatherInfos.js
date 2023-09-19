import React from "react";

import { renderToString } from "react-dom/server";

import FormatedTimezone from "../Components/FormatedTimezone";
import CurrentWeatherImages from "../Components/CurrentWeatherImages";

export default function CurrentWeatherInfos(props) {
  function fontSizeChange() {
    let string = `${props.city}${props.country}`;
    if (string.length > 12) {
      return "positionLong";
    } else {
      return "positionNormal";
    }
  }

  let backgroundImage = renderToString(
    <CurrentWeatherImages
      icon={props.icon}
      apiKey={props.apiKey}
      longitude={props.longitude}
      latitude={props.latitude}
      weatherData={props.weatherData}
    />
  );

  let currentWeatherImgStyle = {
    backgroundImage: `url(/backgroundImages/${backgroundImage}.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 25px",
    backgroundSize: "90%",
  };

  return (
    <div className="currentWeather" style={currentWeatherImgStyle}>
      <div className="degree">{Math.round(props.temperature)}°</div>
      <div className="description">{props.description} </div>
      <div className="feelsLike">Feels like {Math.round(props.feelsLike)}°</div>
      <div className="minMax">
        {Math.round(props.min)}° | <strong>{Math.round(props.max)}°</strong>
      </div>

      <div className="positionTime">
        <div className={`${fontSizeChange()}`}>
          <a
            onClick={props.handleGeolocation}
            href="/"
            className="btn geoButton"
          >
            <i className="bi bi-geo-alt"></i>
          </a>
          <div className="city">
            {props.city}, {props.country}
          </div>
        </div>
        <div className="time ">
          <FormatedTimezone timezone={props.timezone} />
        </div>
      </div>
    </div>
  );
}
