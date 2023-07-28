import "./Weather.css"

export default function Weather() {
  return (
    <div className='Weather'>
      <div className='container'>
        <header>
          <form>
            <input
              type='search'
              placeholder='Enter a city..'
              autoFocus='on'
            />
            <button
              className='btn '
              type='submit'
            >
              <i className='bi bi-search'></i>
            </button>
          </form>
        </header>
        <div className='updateTime'>Updated Friday, July 21, 12:13</div>
        <a
          href='#forcast'
          className='btn forcastAnchor'
        >
          5 days
          <i className='bi bi-caret-down'></i>
        </a>
        <a
          href='#'
          className='celsius active'
        >
          °C
        </a>
        <a
          href='#'
          className='fahrenheit '
        >
          °F
        </a>

        <div className='currentWeather'>
          <div className='degree'>24°</div>
          <div className='description'>Sunny</div>
          <div className='feelsLike'>Feels like 27°</div>
          <div className='minMax'>
            16° | <strong>25°</strong>
          </div>

          <div className='positionTime'>
            <div className='position'>
              <a
                href='#'
                className='btn geoButton'
              >
                <i className='bi bi-geo-alt'></i>
              </a>
              <div className='city'>Lambton, CA</div>
            </div>
            <div className='time '>Friday, July 21, 12:13</div>
          </div>
          <a
            href='#infos'
            className='btn infosAnchor'
          >
            <i className='bi bi-caret-down-fill'></i>
          </a>
        </div>
      </div>
    </div>
  )
}
