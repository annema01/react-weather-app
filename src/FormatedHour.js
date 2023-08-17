import React from "react";

export default function FormatedHour(props) {

    let hours = props.date.getHours();
    if (hours < 10) { return `0${hours}` };
    let minutes = props.date.getMinutes();
    if (minutes < 10) { return `0${minutes}` };

    console.log(hours);
    console.log(minutes);


    return (
        <div>
            { hours }:{ minutes }
        </div>

    );
}