import React, { useEffect, useRef, useState } from 'react'
import StopWatchButton from './StopWatchButton'
import StopWatch, {timetoString} from './StopWatch'

export default function App() {
    const [running, setRunning] = useState(false)
    const [time, setTime] = useState(0)
    const [laps, setLaps] = useState([])
    const startTime = useRef(null)
    const prevLapTime = useRef(null)
    const handleStart = () => {
        setRunning(true)
        const currentTime = Date.now()
        startTime.current = currentTime
        prevLapTime.current = 0
    }
    const handleStop = () => {
        setRunning(false)
    }
    const handleReset = () => {
        setRunning(false)
        setTime(0)
        setLaps([])
    }
    const handleLap = () => {
        const lapDuration = time - prevLapTime.current
        debugger
        setLaps(prevLap => [...prevLap,lapDuration])
        prevLapTime.current = time
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
            <StopWatchButton {...{handleStart,handleStop,handleReset,handleLap}}/>
            {laps.map((lap,i) => <div>Lap {i+1}: {timetoString(lap)}</div>)}
        </div>
    )
}