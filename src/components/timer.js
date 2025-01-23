import "../styles/timer.css";

import TimeInput from "./timeInput";
import TimerDisplay from "./timerDisplay";
import TimerInterface from "./timerInterface";

import { useState, useEffect } from "react";

function Timer() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const [sessionRemainingTime, setSessionRemainingTime] = useState("00:00");

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      if (convertTimeRemainingToSecs(sessionRemainingTime) > 0) {
        console.debug("convertTime > 0");
        const countDown = setInterval(() => {
          const remaining = formatTime(
            convertTimeRemainingToSecs(sessionRemainingTime)
          );
          console.debug(`remaining: ${remaining}`);
          setSessionRemainingTime(remaining);
        }, 1000);
        return () => clearInterval(countDown);
      }
    }
  }, [isPlaying, sessionRemainingTime]);

  useEffect(() => {
    setSessionRemainingTime(formatTime(sessionLength));
  }, [sessionLength]);

  /**
   * Converts string sessionRemainingTime to seconds.
   */
  function convertTimeRemainingToSecs(timeRemaining) {
    const mins = timeRemaining.slice(0, 2) * 60;
    const secs = timeRemaining.slice(3, 5) * 0; // implicit cast to number
    console.debug(`mins: ${mins} sec: ${secs}`);
    return mins + secs;
  }
  /**
   * Converts time in seconds to the format minutes and seconds.
   * Returns a string "MM:SS".
   *  */
  function formatTime(seconds) {
    const mins = seconds % 60;
    const remainingSeconds = Math.floor((seconds % 60) / 60);
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

  function handlePlay(e) {
    setIsPlaying((prevState) => !prevState);
    console.debug(`isPlaying: ${isPlaying}`);
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
      <TimerDisplay displayValue={sessionRemainingTime} />
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
