import React, { useState } from "react";

export default function FahrenheitButton(props) {

    return (
        <a onClick={ props.handle } href="/" className="fahrenheit ">
            °F
        </a>
    );

}