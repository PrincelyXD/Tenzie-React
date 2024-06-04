import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HamBurger({ handleSoundClick, soundValue, reset }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      {isOpen && (
        <motion.span
          initial={{ opacity: 0, transform: "translateX(-15px)" }}
          animate={{ opacity: 1, transform: "translateX(3px)" }}
          className="dropdown"
        >
          {" "}
          <ul>
            <li onClick={handleSoundClick}>
              Sound: <span>{soundValue ? "🔉" : "🔇"}</span>
            </li>{" "}
            <li onClick={reset}>
              Reset: <span>🔁</span>
            </li>
          </ul>
        </motion.span>
      )}
    </div>
  );
}

export default HamBurger;
