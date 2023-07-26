import "./Weather.css"

export default function Weather() {
  return (
    <div className='container-fluid'>
      Weather App
      <header>
        <div>
          <i className='bi bi-search'></i>
        </div>
        <input type='search' />
        <input type='submit'></input>
      </header>
    </div>
  )
}
