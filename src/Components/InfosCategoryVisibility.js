import React from "react";

export default function InfosCategoryVisibility(props) {

    if (props.infoType >= 10) {
        return (
            <div className='col-6 col-md-4'>
                <i className={ `icon bi bi-${props.icon}` }></i>
                <div className='title'>{ props.title }</div>
                <div className="data text">
                    No limit<span className='unit'></span>
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