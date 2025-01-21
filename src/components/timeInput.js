function TimeInput({ handler, label }) {
  return (
    <div className="time-input">
      <label>
        {label} Length
        <input type="number" />
      </label>
    </div>
  );
}

export default TimeInput;
