import React from 'react'
interface StopWatchProps {
    handleStart: () => void;
    handleStop: () => void;
    handleReset: () => void;
    handleLap: () => void;
}
export default function StopWatchButton(props: StopWatchProps) {
    const {handleStart, handleStop, handleReset, handleLap} = props
    return (
        <div>
            <button onClick={handleStart}>Start stopwatch</button>
            <button onClick={handleStop}>Stop stopwatch</button>
            <button onClick={handleReset}>Reset stopwatch</button>
            <button onClick={handleLap}>Lap</button>
        </div>
    )
}