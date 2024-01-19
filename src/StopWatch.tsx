import React, { useState } from 'react'

interface StopwatchProps {
    time : number;
}
export function timetoString(time : number){
    const miliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    const formattedTime = [
        hours.toString().padStart(2,"0"),
        minutes.toString().padStart(2,"0"),
        seconds.toString().padStart(2,"0"),
        miliseconds.toString().padStart(3,"0")
    ].join(":")
    return formattedTime

}
export default function StopWatch(props : StopwatchProps) {
    const {time} = props
    const formattedTime = timetoString(time)

    return(
        <div>
            Time is {formattedTime}
        </div>
    )
}