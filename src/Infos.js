import React from "react"
import "./Infos.css"

//component import
import InfosComponent from "./InfosComponent"
import InfosComponentTime from "./InfosComponentTime"
import PrecipitationInfosComponent from "./PrecipitationInfosComponent"

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

          <InfosComponent
            infoType={ undefined }
            icon={ "cloud-haze2" }
            title={ "Air quality" }
            dataType={ "text" }
            unit={ "" }
          />

          <InfosComponent
            infoType={ props.data.humidity }
            icon={ "droplet" }
            title={ "Humidity" }
            dataType={ "integer" }
            unit={ "%" }
          />
          {/*Wind Speed special component */ }
          <InfosComponent
            infoType={ props.data.windSpeed }
            icon={ "wind" }
            title={ "Wind speed" }
            dataType={ "integer" }
            unit={ "m/s" }
            windDeg={ props.data.windDeg }
          />


          <InfosComponent
            infoType={ props.data.windGust }
            icon={ "tornado" }
            title={ "Wind gust" }
            dataType={ "integer" }
            unit={ "m/s" }
          />

          <PrecipitationInfosComponent snow={ props.data.snow } rain={ props.data.rain } />

          <InfosComponent
            infoType={ props.data.pressure }
            icon={ "arrow-down-up" }
            title={ "Pressure" }
            dataType={ "integer" }
            unit={ "hPa" }
          />
          <InfosComponent
            infoType={ props.data.visibility }
            icon={ "eye" }
            title={ "Visibility" }
            dataType={ "integer" }
            unit={ "m" }
          />
          <InfosComponent
            infoType={ props.data.clouds }
            icon={ "clouds" }
            title={ "Clouds" }
            dataType={ "integer" }
            unit={ "%" }
          />
          <InfosComponentTime
            infoType={ props.data.clouds }
            icon={ "sunrise" }
            title={ "Sunrise" }
            dataType={ "text" }
            unit={ "" }
            sunrise={ props.data.sunrise }
            timezone={ props.data.timezone }
          />

          <InfosComponentTime
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
