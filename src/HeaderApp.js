import React from "react";
import UnitLinks from "./UnitLinks";

export default function HeaderApp(props) {
    return (
        <header id="scrollUp">
            <form onSubmit={ props.submit } className="col-md-5">
                <input
                    type="search"
                    placeholder="Enter a city..."
                    autoFocus="on"
                    onChange={ props.cityChange }
                />
                <button className="btn " type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <UnitLinks celciusFunction={ props.celcius } fahrenheitFunction={ props.fahrenheit } unit={ props.unit } mobile=" " />

        </header>
    );
} 