import "./Weather.css"

export default function Weather() {
  return (
    <div className='Weather'>
      <div className='container'>
        Weather App
        <header>
          <input
            type='search'
            placeholder='Enter a city..'
            autoFocus='on'
          />
          <button
            className='btn'
            type='submit'
          >
            <i className='bi bi-search'></i>
          </button>
          <div>Updated Friday, July 21, 12:13</div>
        </header>
        <button className='btn'>
          5 days <i className='bi bi-caret-down'></i>
        </button>
        <button className='btn'>°C</button>
        <button className='btn'>°F</button>
        <div className='current-weather'>
          <div className='degree'>24°</div>
          <div className='description'>Sunny</div>
          <div className='feels-like'>Feels like 27°</div>
          <div className='min-max'>
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
