import React from "react"

import ForcastInfosCategory from "../Components/ForcastInfosCategory"

export default function ForcastInfos(props) {
    return (
        <div className='hiddenInfo '>
            <div className='row g-0'>
                <ForcastInfosCategory
                    infoTitle="Precipitation"
                    infoType={ props.forcastData.pop * 100 }
                    unit="%"
                    degree={ "" }
                />
                <ForcastInfosCategory
                    infoTitle="Humidity"
                    infoType={ props.forcastData.humidity }
                    unit="%"
                    degree={ "" }
                />
            </div>
            <div className='row g-0'>
                <ForcastInfosCategory
                    infoTitle="Pressure"
                    infoType={ Math.round(props.forcastData.pressure * 0.1) }
                    unit="kPa"
                    degree={ "" }
                />
                <ForcastInfosCategory
                    infoTitle="Wind speed"
                    infoType={ Math.round(props.forcastData.wind_speed * 3.6) }
                    unit="km/h"
                    degree={ props.forcastData.wind_deg - 50 }
                />
            </div>
            <div className='row g-0'>
                <ForcastInfosCategory
                    infoTitle="Wind gust"
                    infoType={ Math.round(props.forcastData.wind_gust * 3.6) }
                    unit="km/h"
                    degree={ "" }
                />
                <ForcastInfosCategory
                    infoTitle="Overcast clouds"
                    infoType={ props.forcastData.clouds }
                    unit="%"
                    degree={ "" }
                />
            </div>
        </div>
    )
}