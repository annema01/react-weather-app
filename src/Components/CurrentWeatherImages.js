
export default function CurrentWeatherImages(props) {

    function moonPhaseSwitch() {
        //  let moonPhase = 0.75;
        // switch (moonPhase) {
        //     case 0: moonPhase = "moon_new";
        //         break;
        //     case 0.25: moonPhase = "moon_firstQuarter";
        //         break;
        //     case 0.5: moonPhase = "moon_full";
        //         break;
        //     case 0.75: moonPhase = "moon_lastQuarter";
        //         break;
        //     case 1: moonPhase = "moon_new";
        //         break;
        //     default: moonPhase = "moon_full";
        //         break;
        // }
        // return moonPhase;
    }

    let moonPhase = moonPhaseSwitch();
    const codeMapping = {
        "01d": "sunny",
        //"01n": `${moonPhase}`,
        "01n": `moon_full`,
        "02d": "partlyCloudy",
        //"02n": `partlyCloudy_${moonPhase}`,
        "02n": `moon_full`,
        "03d": "partlyCloudy",
        // "03n": `partlyCloudy_${moonPhase}`,
        "03n": `moon_full`,
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
    }

    let image = codeMapping[ props.icon ];




    return image;

}