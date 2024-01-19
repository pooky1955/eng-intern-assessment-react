import React, { useEffect, useRef, useState } from 'react'
import StopWatchButton from './StopWatchButton'
import StopWatch from './StopWatch'

export default function App() {
    const [running, setRunning] = useState(false)
    const [time, setTime] = useState(0)
    const startTime = useRef(null)
    const handleStart = () => {
        setRunning(true)
        startTime.current = Date.now()
    }
    const handleStop = () => {
        setRunning(false)
    }
    const handleReset = () => {
        setRunning(false)
        setTime(0)
    }
    useEffect(() => {
        let intervalId : NodeJS.Timer;
        if (running){
            intervalId = setInterval(() => {
                setTime(Date.now() - startTime.current)
            },1)
        }
        return () => clearInterval(intervalId)
    },[running])
    return(
        <div>
            <StopWatch time={time}/>
            <StopWatchButton {...{handleStart,handleStop,handleReset}}/>
        </div>
    )
}