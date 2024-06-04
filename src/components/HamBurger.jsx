import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

function HamBurger({handleSoundClick, soundValue, reset}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      {isOpen && (
        <span className="dropdown">
          {" "}
          <ul>
            <li onClick={handleSoundClick}>
              Sound: <span style={{ fontSize: "24px" }}>{soundValue ? '🔉':"🔇" }</span>
            </li>{" "}
            <li onClick={reset}>
              Reset: <span style={{ fontSize: "24px" }}>🔁</span>
            </li>
          </ul>
        </span>
      )}
    </div>
  );
}

export default HamBurger;
