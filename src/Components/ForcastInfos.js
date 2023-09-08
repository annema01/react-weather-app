import React from "react"


export default function ForcastInfos(props) {
    return (
        <div className='hiddenInfo '>
            <div className='row g-0'>
                <div className='col-6'>
                    <div className='title'>Air quality</div>
                    <div className='data text'>
                        Very poor <span className='unit'></span>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='title'>Precipitation</div>
                    <div className='data integer'>
                        32 <span className='unit'>mm</span>
                    </div>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-6'>
                    <div className='title'>Humidity</div>
                    <div className='data integer'>
                        25 <span className='unit'>%</span>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='title'>Pressure</div>
                    <div className='data integer'>
                        25 <span className='unit'>hPa</span>
                    </div>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-6'>
                    <div className='title'>Wind speed</div>
                    <div className='data integer'>

                        <svg
                            className='windDirection'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 448 512'
                        >
                            <path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z' />
                        </svg>

                        6.7 <span className='unit'>m/s</span>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='title'>Visibility</div>
                    <div className='data text'>
                        No limit <span className='unit'></span>
                    </div>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-6'>
                    <div className='title'>Wind gust</div>
                    <div className='data integer'>
                        11.5 <span className='unit'>m/s</span>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='title'>Overcast clouds</div>
                    <div className='data integer'>
                        97 <span className='unit'>%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}