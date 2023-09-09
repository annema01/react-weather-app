import React, { useState } from "react"
import "../styles/Forcast.css"

import axios from "axios";

import ForcastDay from "../Components/ForcastDay";



export default function Forcast(props) {
  let [ loaded, setLoaded ] = useState(false);
  let [ forcast, setForcast ] = useState(null);




  function handleResponse(response) {

    setForcast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <ForcastDay
        data={ forcast[ 0 ] }
        collapse="day1"
        target="#day1"

      />
    )

  } else {
    console.log(`LAT${props.latitude}`);

    let unit = props.unit;
    let longitude = props.longitude;
    let latitude = props.latitude;
    const apiKey = props.apiKey;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    console.log(apiUrl);

    axios.get(apiUrl).then(handleResponse);


  }
}
