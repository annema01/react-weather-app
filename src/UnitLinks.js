import React from "react";

import UnitLink from "./UnitLink";


export default function UnitLinks(props) {

    if (props.unit === "metric") {
        return (
            <div className="unitLinks col">
                <UnitLink handle={ props.celciusFunction } unit={ "°C" } individualClass={ "celsius" } isActive=" active " mobile={ props.mobile } />
                <UnitLink handle={ props.fahrenheitFunction } unit={ "°F" } individualClass={ "fahrenheit" } isActive=" " mobile={ props.mobile } />
            </div>
        );
    } else {
        return (
            <div className="unitLinks col">
                <UnitLink handle={ props.celciusFunction } unit={ "°C" } individualClass={ "celsius" } isActive=" " mobile={ props.mobile } />
                <UnitLink handle={ props.fahrenheitFunction } unit={ "°F" } individualClass={ "fahrenheit" } isActive=" active " mobile={ props.mobile } />
            </div>
        );
    }
}