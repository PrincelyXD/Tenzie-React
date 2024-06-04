function Die({ value, isHeld, handleClick }) {
  return (
    <div
      className={`Die num${value}die`}
      style={{ backgroundColor: isHeld && "#59E391" }}
      onClick={handleClick}
    >
    </div>
  );
}

export default Die;
