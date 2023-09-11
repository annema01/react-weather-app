import React, { useEffect, useState } from "react";

import "../styles/Forcast.css"

import axios from "axios";

import ForcastDay from "../Components/ForcastDay";



export default function Forcast(props) {
  let [ loaded, setLoaded ] = useState(false);
  let [ forcast, setForcast ] = useState(null);





  function handleResponse(response) {
    console.log(response.data.daily);
    setForcast(response.data.daily);
    setLoaded(true);
  }




  if (props.longitude && props.latitude) {

    if (loaded) {
      return (
        <ForcastDay
          data={ forcast[ 0 ] }
          collapse="day1"
        />
      )

    } else {

      console.log(props.latitude);
      console.log(props.longitude);

      const apiKey = props.apiKey;

      let unit = props.unit;
      let longitude = props.longitude;
      let latitude = props.latitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

      axios.get(apiUrl).then(handleResponse);

      return null;

    }
  }
}