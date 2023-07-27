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
        collapse='day1'
        target='#day1'
      />
      <Forcast
        weekday='Thursday'
        collapse='day2'
        target='#day2'
      />
      <Forcast
        weekday='Friday'
        collapse='day3'
        target='#day3'
      />
      <Forcast
        weekday='Saturday'
        collapse='day4'
        target='#day4'
      />
      <Forcast
        weekday='Sunday'
        collapse='day5'
        target='#day5'
      />

      <Footer />
    </div>
  )
}

export default App
