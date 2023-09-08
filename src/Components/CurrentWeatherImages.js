
export default function CurrentWeatherImages(props) {
    const codeMapping = {
        "01d": "sunny",
        "01n": "sunny",
        "02d": "partlyCloudy",
        "02n": "partlyCloudy",
        "03d": "partlyCloudy",
        "03n": "partlyCloudy",
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