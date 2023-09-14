import React, { useEffect, useState } from "react";

import "../styles/Forcast.css"

import axios from "axios";

import ForcastDay from "../Components/ForcastDay";

import { RotatingLines } from "react-loader-spinner";



export default function Forcast(props) {
  let [ loaded, setLoaded ] = useState(false);
  let [ forcast, setForcast ] = useState(null);
  let day = [ "day1", "day2", "day3", "day4", "day5" ]

  function handleResponse(response) {
    // console.log(response.data.daily);
    setForcast(response.data.daily);
    setLoaded(true);
  }

  function Load() {
    const apiKey = props.apiKey;

    let unit = props.unit;
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }



  useEffect(() => {
    //code i want to run
    setLoaded(false);
    // return function (optionnal)
  }, [ props.longitude ]); //dependency array


  useEffect(() => {
    //code i want to run
    setLoaded(false);
    // return function (optionnal)
  }, [ props.unit ]); //dependency array

  if (props.longitude && props.latitude) {

    if (loaded) {
      return (
        <div>
          { forcast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={ index }>
                  <ForcastDay data={ dailyForecast } collapse={ day[ index ] } />
                </div>
              );
            } else {
              return null;
            }
          }) }
        </div>
      );

    } else {
      <div className="col d-flex justify-content-center pt-4">
        <RotatingLines
          strokeColor="#017eff"
          strokeWidth="2"
          animationDuration="1.5"
          width="96"
          visible={ true }
        />
      </div>
      Load();
      return null;

    }
  }
}