import "./App.css"
import Weather from "./Weather"

function App() {
  return (
    <div className='App'>
      <Weather />
      <footer>
        © 2023 -{" "}
        <a
          href='https://github.com/annema01/react-weather-app'
          target='_blank'
          rel='noreferrer'
        >
          Coded
        </a>{" "}
        by{" "}
        <a
          href='https://github.com/annema01'
          target='_blank'
          rel='noreferrer'
        >
          Anne-Marie Robert
        </a>{" "}
        with{" "}
        <a
          href='https://www.shecodes.io/'
          target='_blank'
          rel='noreferrer'
        >
          SheCodes React
        </a>
        <div>
          {" "}
          Image by{" "}
          <a href='https://www.freepik.com/free-vector/hand-drawn-weather-effects_18895324.htm#query=weather&position=0&from_view=search&track=sph'>
            Freepik
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
