import React, { useState } from "react";

import "../styles/Forcast.css"

import axios from "axios";

import ForcastDay from "../Components/ForcastDay";



export default function Forcast(props) {
  let [ loaded, setLoaded ] = useState(false);
  let [ forcast, setForcast ] = useState(null);





  function handleResponse(response) {

    setForcast(response.data.daily);
    setLoaded(true);
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

    console.log(props.latitude);
    console.log(props.longitude);
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";

    let unit = props.unit;
    let longitude = props.longitude;
    let latitude = props.latitude;
    //const apiKey = props.apiKey;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return null;

  }
}
