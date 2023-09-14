import React from "react";

export default function ForcastInfosCategory(props) {

    if (props.infoTitle === "Wind speed") {
        return (
            <div className='col-6'>
                <div className='title'>{ props.infoTitle }</div>
                <div className='data integer'>
                    <svg
                        className='windDirection'
                        style={ {
                            transform: `rotate(${props.degree}deg)`,
                        } }
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                    >
                        <path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z' />
                    </svg>
                    { props.infoType }<span className='unit'>{ props.unit }</span>
                </div>
            </div>
        );
    } else {
        if (props.infoType === 0) {
            return (
                <div className='col-6'>
                    <div className='title'>{ props.infoTitle }</div>
                    <div className='data text'>
                        None<span className='unit'></span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='col-6'>
                    <div className='title'>{ props.infoTitle }</div>
                    <div className='data integer'>
                        { props.infoType }<span className='unit'>{ props.unit }</span>
                    </div>
                </div>
            );

        }
    }

}