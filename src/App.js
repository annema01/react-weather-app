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
        collapse={1}
        target='#1'
      />
      <Forcast
        weekday='Thursday'
        collapse={2}
        target='#2'
      />
      <Forcast
        weekday='Friday'
        collapse={3}
        target='#3'
      />
      <Forcast
        weekday='Saturday'
        collapse={4}
        target='#4'
      />
      <Forcast
        weekday='Sunday'
        collapse={5}
        target='#5'
      />

      <Footer />
    </div>
  )
}

export default App
