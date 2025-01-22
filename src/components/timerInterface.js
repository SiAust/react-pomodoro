import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";

function TimerInterface({
  handlePlay,
  handlePause,
  handleReset,
  isPlaying,
  isPaused,
}) {
  return (
    <div className="timer-interface">
      <FontAwesomeIcon
        icon={faPlay}
        onClick={handlePlay}
        className={isPlaying ? "playing" : ""}
      />
      <FontAwesomeIcon
        icon={faPause}
        onClick={handlePause}
        className={isPaused ? "paused" : ""}
      />
      <FontAwesomeIcon icon={faRotate} onClick={handleReset} />
    </div>
  );
}

export default TimerInterface;
