function TimerDisplay({ displayValue }) {
  return (
    <div className="timer-display">
      <p>Session</p>
      <span>{displayValue}</span>
    </div>
  );
}

export default TimerDisplay;
