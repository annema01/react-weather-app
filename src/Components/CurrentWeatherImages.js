import CurrentMoonPhase from "../Components/CurrentMoonPhase";

import { renderToString } from "react-dom/server";

export default function CurrentWeatherImages(props) {
  let moonPhase = renderToString(
    <CurrentMoonPhase moonPhase={props.moonPhase} longitude={props.longitude} />
  );
  const codeMapping = {
    "01d": "sunny",
    "01n": `${moonPhase}`,
    //"01n": `moon_firstQuarter`,

    "02d": "partlyCloudy",
    "02n": `partlyCloudy_${moonPhase}`,
    // "02n": `moon_full`,
    "03d": "partlyCloudy",
    "03n": `partlyCloudy_${moonPhase}`,
    //"03n": `moon_full`,
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rain",
    "09n": "rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "storm",
    "11n": "storm",
    "13d": "snow",
    "13n": "snow",
    "50d": "fog",
    "50n": "fog",
  };

  let image = codeMapping[props.icon];

  return image;
}
