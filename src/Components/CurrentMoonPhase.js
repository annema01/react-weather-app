//import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function CurrentMoonPhase(props) {
  // const [ moonPhase, setMoonPhase ] = useState(0.75);

  // function handleResponseMoophase(response) {
  //   setMoonPhase(response.data.daily[ 0 ].moon_phase);
  //   console.log(`moonphase: ${moonPhase}`);
  // }

  // function searchMoonPhase() {
  //   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiKey}`;
  //   axios.get(apiUrl).then(handleResponseMoophase);
  // }
  // useEffect(() => {
  //   searchMoonPhase();
  // }, [ props.longitude ]);

  let moonPhase = 0;
  switch (moonPhase) {
    case 0:
      moonPhase = "moon_new";
      break;
    case 0.25:
      moonPhase = "moon_firstQuarter";
      break;
    case 0.5:
      moonPhase = "moon_full";
      break;
    case 0.75:
      moonPhase = "moon_lastQuarter";
      break;
    case 1:
      moonPhase = "moon_new";
      break;
    default:
      moonPhase = "moon_full";
      break;
  }


  return `${moonPhase}`;
}
