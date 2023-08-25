
//all images import
import wind from "./backgroundImages/wind.svg";

// setup a switch case for the image (or the data maping que le prof a fait)
export default function CurrentWeatherImg() {
  return      (       
  <div
  className="currentWeather"
      style={{
        backgroundImage: `url(${wind})`,
        backgroundSize: "75%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px top 25px",
      }}></div>
    );
}
