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
      <TimerInterface />
    </div>
  );
}

export default Timer;
