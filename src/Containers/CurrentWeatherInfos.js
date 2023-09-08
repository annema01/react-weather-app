import React from "react";

import { renderToString } from 'react-dom/server';

import FormatedTimezone from "../Components/FormatedTimezone";
import CurrentWeatherImages from "../Components/CurrentWeatherImages";


export default function CurrentWeatherInfos(props) {

    let backgroundImage = renderToString(<CurrentWeatherImages icon={ props.icon } />);

    let currentWeatherImgStyle = {
        backgroundImage: `url(/backgroundImages/${backgroundImage}.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px top 25px",
    }
    return (
        <div className="currentWeather" style={ currentWeatherImgStyle } >
            <div className="degree">
                { Math.round(props.temperature) }°
            </div>
            <div className="description">{ props.description } </div>
            <div className="feelsLike">
                Feels like { Math.round(props.feelsLike) }°
            </div>
            <div className="minMax">
                { Math.round(props.min) }° |{ " " }
                <strong>{ Math.round(props.max) }°</strong>
            </div>

            <div className="positionTime">
                <div className="position">
                    <a href="/" className="btn geoButton">
                        <i className="bi bi-geo-alt"></i>
                    </a>
                    <div className="city">
                        { props.city }, { props.country }
                    </div>
                </div>
                <div className="time ">
                    <FormatedTimezone timezone={ props.timezone } />
                </div>
            </div>
        </div>

    );
}