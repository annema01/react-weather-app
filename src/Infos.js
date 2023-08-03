import React from "react"
import "./Infos.css"

export default function Infos() {
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
        className='container'
      >
        <div className='row'>
          <div className='col-6'>
            <i className='icon bi bi-cloud-haze2'></i>
            <div className='title'>Air quality</div>
            <div className='data text'>
              Very poor<span className='unit'></span>
            </div>
          </div>
          <div className='col-6'>
            <i className='icon bi bi-droplet'></i>
            <div className='title'>Humidity</div>
            <div className='data integer'>
              25<span className='unit'>%</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='icon bi bi-wind'></i>
            <div className='title'>Wind speed</div>
            <div className='data integer'>
              <div>
                <svg
                  className='windDirection'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z' />
                </svg>
              </div>
              6.7<span className='unit'>m/s</span>
            </div>
          </div>
          <div className='col-6'>
            <i className='icon bi bi-tornado'></i>
            <div className='title'>Wind gust</div>
            <div className='data integer'>
              11.6<span className='unit'>m/s</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='icon bi bi-umbrella'></i>
            <div className='title'>Rain</div>
            {/* ALTERNATIVE SNOW */ }
            <i className='icon bi bi-snow hidden'></i>
            <div className='title hidden'>Snow</div>
            {/* ALTERNATIVE SNOW */ }
            <i className='icon bi bi-cloud-hail hidden'></i>
            <div className='title hidden'>Precipitation</div>
            {/* normal data*/ }
            <div className='data integer'>
              1.5<span className='unit'>mm</span>
            </div>
          </div>
          <div className='col-6'>
            <i className='icon bi bi-arrow-down-up'></i>

            <div className='title'>Pressure</div>
            <div className='data integer'>
              1050<span className='unit'>hPa</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='icon bi bi-eye'></i>
            <div className='title'>Visibility</div>
            <div className='data integer'>
              11<span className='unit'>km</span>
            </div>
            {/* ALTERNATIVE NO LIMIT */ }
            <div className="hidden">
              <div className='data text '>
                No limit<span className='unit'></span>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <i className='icon bi bi-clouds'></i>
            <div className='title'>Overcast clouds</div>
            <div className='data integer'>
              75<span className='unit'>%</span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <i className='icon bi bi-sunrise'></i>
            <div className='title'>Sunrise</div>
            <div className='data text'>
              05:25<span className='unit'></span>
            </div>
          </div>
          <div className='col-6'>
            <i className='icon bi bi-sunset'></i>
            <div className='title'>Sunset</div>
            <div className='data text'>
              20:34<span className='unit'></span>
            </div>
          </div>
        </div>
      </div>
      <div id="forcast"></div>
    </div>
  )
}
