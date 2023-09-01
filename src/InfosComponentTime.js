import React from "react";

import FormatedHour from "./FormatedHour";

export default function InfosComponentTime(props) {
    if (props.title === "Sunrise") {
        return (
            <div className='col-6 col-md-4'>
                <i className={ `icon bi bi-${props.icon}` }></i>
                <div className='title'>{ props.title }</div>
                <div className={ `data ${props.dataType}` }>
                    <FormatedHour date={ props.sunrise } timezone={ props.timezone } /><span className='unit'></span>
                    <span className='unit'>{ props.unit }</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className='col-6 col-md-4'>
                <i className={ `icon bi bi-${props.icon}` }></i>
                <div className='title'>{ props.title }</div>
                <div className={ `data ${props.dataType}` }>
                    <FormatedHour date={ props.sunset } timezone={ props.timezone } /><span className='unit'></span>
                    <span className='unit'>{ props.unit }</span>
                </div>
            </div>
        );
    }

}