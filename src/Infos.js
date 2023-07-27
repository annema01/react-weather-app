import React from "react"
import "./Infos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Infos() {
  return (
    <div className='Infos'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <i className='bi bi-cloud-haze2'></i>
            <div className='title'>Air quality</div>
            <div className='data text'>
              Very poor <span className='unit'></span>
            </div>
          </div>
          <div className='col-6'>
            <i className='bi bi-droplet'></i>
            <div className='title'>Humidity</div>
            <div className='data text'>
              25 <span className='unit'>%</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='bi bi-wind'></i>
            <div className='title'>Wind speed</div>
            <div className='data text'>
              <FontAwesomeIcon
                icon={icon({ name: "location-arrow", style: "solid" })}
              />
              6.7 <span className='unit'>m/s</span>
            </div>
          </div>
          <div className='col-6'>
            <i className='bi bi-tornado'></i>
            <div className='title'>Wind gust</div>
            <div className='data text'>
              11.6 <span className='unit'>m/s</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='bi bi-umbrella'></i>
            <div className='title'>Rain</div>
            <div className='data text'>
              1.5 <span className='unit'>mm</span>
            </div>
          </div>
          <div className='col-6'>
            <div>
              <i className='bi bi-arrow-up-short d-block'></i>
              <i className='bi bi-arrow-down-short d-block'></i>
            </div>
            <div className='title'>Pressure</div>
            <div className='data text'>
              1050 <span className='unit'>hPa</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='bi bi-eye'></i>
            <div className='title'>Visibility</div>
            <div className='data text'>
              11 <span className='unit'>km</span>
            </div>
          </div>
          <div className='col-6'>
            <i className='bi bi-clouds'></i>
            <div className='title'>Overcast clouds</div>
            <div className='data text'>
              75 <span className='unit'>%</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='bi bi-sunrise'></i>
            <div className='title'>Sunrise</div>
            <div className='data text'>
              05:25 <span className='unit'></span>
            </div>
          </div>
          <div className='col-6'>
            <i className='bi bi-sunset'></i>
            <div className='title'>Sunset</div>
            <div className='data text'>
              20:34 <span className='unit'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
