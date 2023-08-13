import React from "react"
import "./Forcast.css"
import ForcastInfos from "./ForcastInfos"


export default function Forcast(props) {
  return (
    <div className='Forcast'>

      <div className='container'>

        <a class='notCollapsable'
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
