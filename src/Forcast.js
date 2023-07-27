import React from "react"
import "./Forcast.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Forcast() {
  return (
    <div className='Forcast'>
      <div className='container'>
        <div className='row col '>
          <div className='week-day col'>Wednesday</div>
          <i className='bi bi-sun-fill col'></i>
          <div className='min-max col'>
            <div className='min'>16°</div>
            <div className='max'>25°</div>
          </div>
          <button
            className='btn col'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
            <i className='bi bi-caret-right-fill'></i>
          </button>
        </div>
        <div
          className='collapse'
          id='collapseExample'
        >
          <div className='card card-body'>
            <div className='row'>
              <div className='col-6'>
                <div className='title'>Air quality</div>
                <div className='data text'>
                  Very poor <span className='unit'></span>
                </div>
              </div>
              <div className='col-6'>
                <div className='title'>Precipitation</div>
                <div className='data integer'>
                  32 <span className='unit'>mm</span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='title'>Humidity</div>
                <div className='data integer'>
                  25 <span className='unit'>%</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='title'>Pressure</div>
                <div className='data integer'>
                  25 <span className='unit'>hPa</span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='title'>Wind speed</div>
                <div className='data integer'>
                  <FontAwesomeIcon
                    icon={icon({ name: "location-arrow", style: "solid" })}
                  />
                  6.7 <span className='unit'>m/s</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='title'>Visibility</div>
                <div className='data text'>
                  No limit <span className='unit'></span>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='title'>Wind gust</div>
                <div className='data integer'>
                  11.5 <span className='unit'>m/s</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='title'>Overcast clouds</div>
                <div className='data integer'>
                  97 <span className='unit'>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
