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
      </footer>
    </div>
  )
}

export default App
