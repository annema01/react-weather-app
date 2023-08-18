import React from "react";

export default function FormatedHour(props) {


    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes < 10) { return `0${minutes}` };


    return (
        <div>
            { hours }:{ minutes }
        </div>


    );
}