import React from "react"
import "../styles/Infos.css"

//component import
import InfosCategory from "../Components/InfosCategory"
import InfosCategoryTime from "../Components/InfosCategoryTime"
import InfosCategoryPrecipitation from "../Components/InfosCategoryPrecipitation"
import InfosCategoryVisibility from "../Components/InfosCategoryVisibility"

export default function Infos(props) {



  return (
    <div className='Infos'>
      <svg
        className='background'
      >
        <circle
          r='1120'
          cx='50%'
        />
      </svg>
      <div
        id='infos'
        className='container '
      >
        <div className='row'>


          <InfosCategory
            infoType={ props.data.humidity }
            icon={ "droplet" }
            title={ "Humidity" }
            dataType={ "integer" }
            unit={ "%" }
            iconStyle={ props.iconStyle }
          />

          <InfosCategory
            infoType={ props.data.windSpeed * 3.6 }
            icon={ "wind" }
            title={ "Wind speed" }
            dataType={ "integer" }
            unit={ "km/s" }
            windDeg={ props.data.windDeg }
            iconStyle={ props.iconStyle }

          />


          <InfosCategory
            infoType={ props.data.windGust * 3.6 }
            icon={ "tornado" }
            title={ "Wind gust" }
            dataType={ "integer" }
            unit={ "km/s" }
            iconStyle={ props.iconStyle }

          />

          <InfosCategoryPrecipitation snow={ props.data.snow } rain={ props.data.rain } iconStyle={ props.iconStyle } />

          <InfosCategory
            infoType={ props.data.pressure * 0.1 }
            icon={ "arrow-down-up" }
            title={ "Pressure" }
            dataType={ "integer" }
            unit={ "kPa" }
            iconStyle={ props.iconStyle }

          />
          <InfosCategoryVisibility
            infoType={ props.data.visibility / 1000 }
            icon={ "eye" }
            title={ "Visibility" }
            dataType={ "integer" }
            unit={ "km" }
            iconStyle={ props.iconStyle }

          />
          <InfosCategory
            infoType={ props.data.clouds }
            icon={ "clouds" }
            title={ "Clouds" }
            dataType={ "integer" }
            unit={ "%" }
            iconStyle={ props.iconStyle }

          />
          <InfosCategoryTime
            infoType={ props.data.clouds }
            icon={ "sunrise" }
            title={ "Sunrise" }
            dataType={ "text" }
            unit={ "" }
            sunrise={ props.data.sunrise }
            timezone={ props.data.timezone }
            iconStyle={ props.iconStyle }

          />

          <InfosCategoryTime
            infoType={ props.data.sunset }
            icon={ "sunset" }
            title={ "Sunset" }
            dataType={ "text" }
            unit={ "" }
            sunset={ props.data.sunset }
            timezone={ props.data.timezone }
            iconStyle={ props.iconStyle }

          />


        </div>
      </div>
      <div id="forcast"></div>
    </div >
  )

}
