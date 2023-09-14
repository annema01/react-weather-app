import React from "react";

export default function InfosCategory(props) {





    if (props.infoType === undefined || isNaN(props.infoType)) {
        return null;
    } else {
        if (props.title === "Wind speed") {
            return (
                <div className='col-6 col-md-4'>
                    <i className={ `icon bi bi-${props.icon}` }></i>
                    <div className='title'>{ props.title }</div>
                    <div className={ `data ${props.dataType}` }>
                        <div>
                            <svg
                                className='windDirection'
                                style={ {
                                    transform: `rotate(${props.windDeg - 50}deg)`,
                                } }
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                            >
                                <path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z' />
                            </svg>
                        </div>
                        { Math.round(props.infoType) }<span className='unit'>{ props.unit }</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='col-6 col-md-4'>
                    <i className={ `icon bi bi-${props.icon}` }></i>
                    <div className='title'>{ props.title }</div>
                    <div className={ `data ${props.dataType}` }>
                        { Math.round(props.infoType) }<span className='unit'>{ props.unit }</span>
                    </div>
                </div>
            );
        }
    }
}


