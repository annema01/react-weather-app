import React from "react"
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className='Footer'>
      <footer>
        <hr />
        <div className="content">
          © 2023 -{ " " }
          <a
            href='https://github.com/annema01/react-weather-app'
            target='_blank'
            rel='noreferrer'
            alt='github.com/annema01/react-weather-app'
          >
            Coded
          </a>{ " " }
          by{ " " }
          <a
            href='https://github.com/annema01'
            target='_blank'
            rel='noreferrer'
            alt='github.com/annema01'
          >
            Anne-Marie Robert
          </a>{ " " }
          <br />
          with{ " " }
          <a
            href='https://www.shecodes.io/'
            target='_blank'
            rel='noreferrer'
            alt='shecodes.io'
          >
            SheCodes React
          </a>
          <div className="imageCredits">
            Images by{ " " }
            <a
              href='https://www.freepik.com/free-vector/hand-drawn-weather-effects_18895324.htm#query=weather&position=0&from_view=search&track=sph'
              target='_blank'
              rel='noreferrer'
              alt='freepik.com'
            >
              Freepik
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
