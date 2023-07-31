import "./App.css"
import Weather from "./Weather"
import Infos from "./Infos"
import Forcast from "./Forcast"
import Footer from "./Footer"

function App() {
  return (
    <div className='App'>
      <Weather />
      <Infos />
      <Forcast
        weekday='Wednesday'
        icon='sun'
        fill='yellow'
        min='16'
        max='25'
        collapse='day1'
        target='#day1'
      />
      <Forcast
        weekday='Thursday'
        icon='cloud-rain'
        fill='blue'
        min='7'
        max='17'
        collapse='day2'
      />
      <Forcast
        weekday='Friday'
        icon='cloud-sun'
        fill='blue'
        min='9'
        max='19'
        collapse='day3'
      />
      <Forcast
        weekday='Saturday'
        icon='cloud-rain'
        fill='blue'
        min='11'
        max='16'
        collapse='day4'
      />
      <Forcast
        weekday='Sunday'
        icon='sun'
        fill='yellow'
        min='9'
        max='20'
        collapse='day5'
      />

      <Footer />
    </div>
  )
}

export default App
