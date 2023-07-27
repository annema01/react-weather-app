import "./App.css"
import Weather from "./Weather"
import Infos from "./Infos"
import Forcast from "./Forcast"

function App() {
  return (
    <div className='App'>
      <Weather />
      <Infos />
      <Forcast />

      <footer>
        © 2023 -{" "}
        <a
          href='https://github.com/annema01/react-weather-app'
          target='_blank'
          rel='noreferrer'
          alt='github.com/annema01/react-weather-app'
        >
          Coded
        </a>{" "}
        by{" "}
        <a
          href='https://github.com/annema01'
          target='_blank'
          rel='noreferrer'
          alt='github.com/annema01'
        >
          Anne-Marie Robert
        </a>{" "}
        with{" "}
        <a
          href='https://www.shecodes.io/'
          target='_blank'
          rel='noreferrer'
          alt='shecodes.io'
        >
          SheCodes React
        </a>
        <div>
          {" "}
          Images by{" "}
          <a
            href='https://www.freepik.com/free-vector/hand-drawn-weather-effects_18895324.htm#query=weather&position=0&from_view=search&track=sph'
            target='_blank'
            rel='noreferrer'
            alt='freepik.com'
          >
            Freepik
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
