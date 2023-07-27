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
        <button className='celsius active'>°C</button>
        <button className='fahrenheit '>°F</button>

        <div className='currentWeather'>
          <div className='degree'>24°</div>
          <div className='description'>Sunny</div>
          <div className='feelsLike'>Feels like 27°</div>
          <div className='minMax'>
            16° | <strong>25°</strong>
          </div>
        </div>
        <div className='position'>
          <div className='d-flex'>
            <button className='btn'>
              <i className='bi bi-geo-alt'></i>
            </button>
            <div className='city'>Lambton, CA</div>
          </div>
          <div className='time '>Friday, July 21, 12:13</div>
        </div>
        <button className='btn'>
          <i className='bi bi-caret-down-fill'></i>
        </button>
      </div>
    </div>
  )
}
