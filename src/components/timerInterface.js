import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";

function TimerInterface() {
  return (
    <div className="timer-interface">
      <FontAwesomeIcon icon={faPlay} />
      <FontAwesomeIcon icon={faPause} />
      <FontAwesomeIcon icon={faRotate} />
    </div>
  );
}

export default TimerInterface;
