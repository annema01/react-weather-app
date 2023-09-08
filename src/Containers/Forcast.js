import React from "react"
import "../styles/Forcast.css"

import axios from "axios";

import ForcastInfos from "../Components/ForcastInfos"



export default function Forcast(props) {



  function handleResponse(response) {

    console.log(response.data)
  }

  let longitude = props.longitude;
  let latitude = props.latitude;
  const apiKey = "f3009e4852fa0a079dab291dabf020c4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className='Forcast'>

      <div className='container'>

        <a className='notCollapsable'
          data-bs-toggle='collapse'
          href={ `#` + props.collapse }
          role='button'
          aria-expanded='false'
          aria-controls={ props.collapse }>

          <div className='weekDay col-6 fullText'>{ props.weekday }</div>
          <i
            className={
              `icon ` + props.fill + ` bi bi-` + props.icon + `-fill col`
            }
          ></i>
          <div className='minMax col' >
            <div className='min'>{ props.min }°</div><span className="shortText">/</span>
            <strong className='max'>{ props.max }°</strong>
          </div>
          <i className='bi bi-caret-right-fill forcastCaret'></i>
        </a>

      </div>
      {/*  Collapsable element  */ }
      <div
        className={ `collapse ` + props.collapse }
        id={ props.collapse }
      >
        <ForcastInfos />
      </div>


    </div>
  )
}
