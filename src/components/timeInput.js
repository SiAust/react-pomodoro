function TimeInput({ handleInput, value, label }) {
  return (
    <div className="time-input">
      <label>
        {label} Length
        <input
          type="number"
          name={`${label}-input`}
          onChange={(e) => handleInput(e)}
          value={value}
          // defaultValue={0}
        />
      </label>
    </div>
  );
}

export default TimeInput;
