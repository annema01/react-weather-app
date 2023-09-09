import React from "react"
import "../styles/Infos.css"

//component import
import InfosCategory from "../Components/InfosCategory"
import InfosCategoryTime from "../Components/InfosCategoryTime"
import InfosCategoryPrecipitation from "../Components/InfosCategoryPrecipitation"

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
          />
          {/*Wind Speed special component */ }
          <InfosCategory
            infoType={ props.data.windSpeed }
            icon={ "wind" }
            title={ "Wind speed" }
            dataType={ "integer" }
            unit={ "m/s" }
            windDeg={ props.data.windDeg }
          />


          <InfosCategory
            infoType={ props.data.windGust }
            icon={ "tornado" }
            title={ "Wind gust" }
            dataType={ "integer" }
            unit={ "m/s" }
          />

          <InfosCategoryPrecipitation snow={ props.data.snow } rain={ props.data.rain } />

          <InfosCategory
            infoType={ props.data.pressure }
            icon={ "arrow-down-up" }
            title={ "Pressure" }
            dataType={ "integer" }
            unit={ "hPa" }
          />
          <InfosCategory
            infoType={ props.data.visibility }
            icon={ "eye" }
            title={ "Visibility" }
            dataType={ "integer" }
            unit={ "m" }
          />
          <InfosCategory
            infoType={ props.data.clouds }
            icon={ "clouds" }
            title={ "Clouds" }
            dataType={ "integer" }
            unit={ "%" }
          />
          <InfosCategoryTime
            infoType={ props.data.clouds }
            icon={ "sunrise" }
            title={ "Sunrise" }
            dataType={ "text" }
            unit={ "" }
            sunrise={ props.data.sunrise }
            timezone={ props.data.timezone }
          />

          <InfosCategoryTime
            infoType={ props.data.sunset }
            icon={ "sunset" }
            title={ "Sunset" }
            dataType={ "text" }
            unit={ "" }
            sunset={ props.data.sunset }
            timezone={ props.data.timezone }
          />


        </div>
      </div>
      <div id="forcast"></div>
    </div >
  )

}
