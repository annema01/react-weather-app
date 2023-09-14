import React from "react";

import ForcastInfos from "../Components/ForcastInfos";


export default function ForcastDay(props) {

    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);

        return `${temperature}°`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);

        return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]

        return days[ day ];

    }


    let icon = props.data.weather[ 0 ].icon;

    function forcastIcon() {
        const codeMapping = {
            "01d": "sun",
            "01n": "moon",
            "02d": "cloud-sun",
            "02n": "cloud-moon",
            "03d": "cloud",
            "03n": "cloud",
            "04d": "clouds",
            "04n": "clouds",
            "09d": "cloud-rain-heavy",
            "09n": "cloud-rain-heavy",
            "10d": "cloud-drizzle",
            "10n": "cloud-drizzle",
            "11d": "cloud-lightning",
            "11n": "cloud-lightning",
            "13d": "cloud-snow",
            "13n": "cloud-snow",
            "50d": "cloud-fog",
            "50n": "cloud-fog",
        }
        return `${codeMapping[ icon ]}`;

    }

    function iconColor(icon) {
        icon = forcastIcon();
        if (icon === "sun") {
            return "yellow";
        } else {
            return "blue"
        }
    }
    return (
        <div className='Forcast'>

            <div className='container'>

                <a className='notCollapsable'
                    data-bs-toggle='collapse'
                    href={ `#` + props.collapse }
                    role='button'
                    aria-expanded='false'
                    aria-controls={ props.collapse }>

                    <div className='weekDay col-6 fullText'>{ day() }</div>
                    <i className={ `icon ${iconColor()} bi bi-${forcastIcon()}-fill col` }></i>
                    <div className='minMax col' >
                        <div className='min'>{ minTemperature() }</div><span className="shortText">/</span>
                        <strong className='max'>{ maxTemperature() }</strong>
                    </div>
                    <i className='bi bi-caret-right-fill forcastCaret'></i>
                </a>

            </div>
            {/*  Collapsable element  */ }
            <div
                className={ `collapse ` + props.collapse }
                id={ props.collapse }
            >
                <ForcastInfos forcastData={ props.data } />
            </div>
        </div>
    );
}