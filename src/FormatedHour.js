import React from "react";

export default function FormatedHour(props) {


    let hours = props.date.getUTCHours();
    let minutes = props.date.getUTCMinutes();
    //   if (minutes < 10) { return `0${minutes}` };

    if (minutes < 10) {
        return (
            <div>
                { hours }:0{ minutes }
            </div>


        );
    } else {
        return (
            <div>
                { hours }:{ minutes }
            </div>


        );
    }

}