import React from "react";

export default function FormatedHour(props) {
let dateNow = new Date();
let localTimezoneShift = dateNow.getTimezoneOffset()* -60;
let apiTimeZoneShift = props.timezone;

console.log(`local: ${localTimezoneShift}`);
console.log(`api: ${apiTimeZoneShift}`);



    let UTChours = props.date.getUTCHours();
    let hours =  props.date.getHours();


    let minutes = props.date.getMinutes();
    //   if (minutes < 10) { return `0${minutes}` };

    if (localTimezoneShift === apiTimeZoneShift) {
            if (minutes < 10){
                return (
                    <div>
                    {hours}:0{minutes}
                    </div>
                );
            } else {
                return (
                    <div>
                    {hours}:{minutes}
                    </div>
                );
            }
    } else {
        if (minutes < 10){
            return (
                <div>
                {UTChours}:0{minutes}
                </div>
            );
        } else {
            return (
                <div>
                {UTChours}:{minutes}
                </div>
            );
        }
    }
}