import React from "react";

export default function InfosCategoryPrecipitation(props) {

    if (props.rain === "-" && props.snow === "-") {
        return (
            <div className='col-6 col-md-4'>
                <i className={ 'icon bi bi-cloud-hail' }></i>
                <div className='title'>Precipitation</div>
                <div className={ 'data text' }>
                    None<span className='unit'></span>
                </div>
            </div>
        );
    } else if (props.rain !== "-") {
        return (
            <div className='col-6 col-md-4'>
                <i className={ 'icon bi bi-umbrella' }></i>
                <div className='title'>Rain</div>
                <div className={ 'data text' }>
                    { props.rain }<span className='unit'>mm</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className='col-6 col-md-4'>
                <i className={ 'icon bi bi-snow' }></i>
                <div className='title'>Snow</div>
                <div className={ 'data text' }>
                    { props.snow }<span className='unit'>mm</span>
                </div>
            </div>
        );
    }
}