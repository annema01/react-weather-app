import React from "react";
export default function FormatedTimezone(props) {
    let timezoneShift = props.timezone;
    let currentUTCDate = new Date();
    let localDate = new Date(currentUTCDate.getTime() + timezoneShift * 1000); //getTime() return milliseconds elapsed since jan 1 1970 00:00:00 UTC



    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

    let day = days[ localDate.getDay() ];
    let month = months[ localDate.getMonth() ];
    let date = localDate.getDate();
    let hours = localDate.getUTCHours();
    let minutes = localDate.getMinutes();


   

    if (minutes < 10) {
        return (
            < div >
                { day }, { month } { date }, { hours }:0{ minutes }
            </div>

        );
    } else {
        return (
            < div >
                { day }, { month } { date }, { hours }:{ minutes }
            </div>

        );
    }
}