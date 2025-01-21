import "../styles/timer.css";

import TimeInput from "./timeInput";
import TimerDisplay from "./timerDisplay";
import TimerInterface from "./timerInterface";

import { useState } from "react";

function Timer() {
  const [sessionLength, setSessionLength] = useState(0);
  const [breakLength, setBreakLength] = useState(0);

  const [countDownTime, setCounddownTime] = useState(0);

  function handleBreakInput(e) {}

  function handleSessionInput(e) {}

  return (
    <div className="timer">
      <div className="timer-inputs">
        <TimeInput handler={setBreakLength} value={breakLength} label="break" />
        <TimeInput handler={handleSessionInput} label="session" />
      </div>
      <TimerDisplay displayValue={countDownTime} />
      <TimerInterface handler={setCounddownTime} />
    </div>
  );
}

export default Timer;
