import "./styles/App.css";
import Weather from "./Containers/Weather";
import Forcast from "./Containers/Forcast";
import Footer from "./Containers/Footer";

function App() {



  return (
    <div className="App g-0">
      <div className="row g-0 contentAll">
        <div className="col-md-7">
          <Weather defaultCity="Montreal" />
        </div>
        <div className=" col-md-5 g-0 forcastSection">
          <Forcast
            weekday="Wednesday"
            weekdayAbbr="Wed."
            icon="sun"
            fill="yellow"
            min="16"
            max="25"
            collapse="day1"
            target="#day1"
          />
        </div>
        <Footer />
      </div>
      <a href="#scrollUp" className="btn scrollUp">
        <i className="bi bi-caret-up-fill"></i>
      </a>
    </div>
  );
}

export default App;
