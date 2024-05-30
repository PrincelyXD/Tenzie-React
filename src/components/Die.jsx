function Die({ value, isHeld, handleClick }) {
  return (
    <div
      className="Die"
      style={{ backgroundColor: isHeld && "#59E391" }}
      onClick={handleClick}
    >
      <h3> {value}</h3>
    </div>
  );
}

export default Die;
