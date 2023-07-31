import React from "react"
import "./Forcast.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Forcast(props) {
  return (
    <div className='Forcast'>
      <div
        id='forcast'
        className='container'
      >
        <i
          className={
            `icon ` + props.fill + ` bi bi-` + props.icon + `-fill col`
          }
        ></i>
        <div className='weekDay col-7'>{props.weekday}</div>

        <div className='minMax col'>
          <div className='min'>{props.min}°</div>
          <strong className='max'>{props.max}°</strong>
        </div>

        <a
          class='btn col'
          data-bs-toggle='collapse'
          href={`#` + props.collapse}
          role='button'
          aria-expanded='false'
          aria-controls={props.collapse}
        >
          <i className='forcastCaret bi bi-caret-right-fill'></i>
        </a>

        <div
          className='collapse'
          id={props.collapse}
        >
          <div className='hiddenInfo '>
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
