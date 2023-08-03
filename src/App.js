import "./App.css"
import Weather from "./Weather"
import Infos from "./Infos"
import Forcast from "./Forcast"
import Footer from "./Footer"

function App() {
  return (
    <div className='App g-0'>
      <div className="row g-0 noFooter">
        <div className=" col-md-7"><Weather /></div>
        <div className=" col-md-5"><Infos />
          <div className="row g-0 forcastSection">
            <Forcast
              weekday='Wednesday'
              weekdayAbbr='Wed.'
              icon='sun'
              fill='yellow'
              min='16'
              max='25'
              collapse='day1'
              target='#day1'
            />
            <Forcast
              weekday='Thursday'
              weekdayAbbr='Thu.'
              icon='cloud-rain'
              fill='blue'
              min='7'
              max='17'
              collapse='day2'
            />
            <Forcast
              weekday='Friday'
              weekdayAbbr='Fri.'
              icon='cloud-sun'
              fill='blue'
              min='9'
              max='19'
              collapse='day3'
            />
            <Forcast
              weekday='Saturday'
              weekdayAbbr='Sat.'
              icon='cloud-rain'
              fill='blue'
              min='11'
              max='16'
              collapse='day4'
            />
            <Forcast
              weekday='Sunday'
              weekdayAbbr='Sun.'
              icon='sun'
              fill='yellow'
              min='9'
              max='20'
              collapse='day5'
            />
          </div>
        </div>
      </div>
      <a
        href='#scrollUp'
        className='btn scrollUp'
      >
        <i className='bi bi-caret-up-fill'></i>
      </a>
      <Footer />
    </div>
  )
}

export default App
