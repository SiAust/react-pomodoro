import "../styles/timer.css";

import TimeInput from "./timeInput";
import TimerDisplay from "./timerDisplay";
import TimerInterface from "./timerInterface";

import { useState, useEffect } from "react";

function Timer() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const [sessionTime, setSessionTime] = useState("00:00");

  useEffect(() => {
    console.debug(`Setting session time to: ${sessionLength}`);
    setSessionTime(`${sessionLength}:00`);
  }, [sessionLength]);

  /**
   * Converts time in seconds to the format minutes and seconds.
   * Returns a string "MM:SS".
   *  */
  function formatTime(seconds) {
    const mins = seconds % 60;
    const remainingSeconds = seconds / 60;
    console.debug(`${mins}:${remainingSeconds}`);
    return `${mins}:${remainingSeconds}`;
  }

  function handleTimeInput(e) {
    if (e.target.name === "break-input") {
      console.log(e.target.name);
      if (e.target.value > -1) {
        setBreakLength(e.target.value);
      }
    } else {
      console.log(e.target.name);
      if (e.target.value > -1) {
        setSessionLength(e.target.value);
      }
    }
  }

  // Interface functions
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function handlePlay(e) {
    setIsPlaying((prevState) => !prevState);

    // while (isPlaying && !isPaused) {
    //   const sessionInSeconds = sessionLength * 60;
    // }
  }

  function handlePause(e) {
    setIsPaused((prevState) => !prevState);
  }

  function handleReset(e) {
    console.debug("Resetting the timer");
    setSessionLength(25);
  }

  return (
    <div className="timer">
      <div className="timer-inputs">
        <TimeInput
          handleInput={handleTimeInput}
          value={breakLength}
          label="break"
        />
        <TimeInput
          handleInput={handleTimeInput}
          value={sessionLength}
          label="session"
        />
      </div>
      <TimerDisplay displayValue={sessionTime} />
      <TimerInterface
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleReset={handleReset}
        isPlaying={isPlaying}
        isPaused={isPaused}
      />
    </div>
  );
}

export default Timer;
