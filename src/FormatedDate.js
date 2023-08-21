import React from "react";

export default function FormatedDate(props) {
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

    let day = days[ props.date.getDay() ];
    let month = months[ props.date.getMonth() ];
    let date = props.date.getDate();
    let hours = props.date.getHours();
    //  if (hours < 10) { return `0${hours}` };
    let minutes = props.date.getMinutes();
    //if (minutes < 10) { return `0${minutes}` };

    if (minutes < 10) {
        return (
            <div>
                { " " } { day }, { month } { date }, { hours }:0{ minutes }
            </div>

        );
    } else {
        return (
            <div>
                { " " } { day }, { month } { date }, { hours }:{ minutes }
            </div>

        );
    }


}