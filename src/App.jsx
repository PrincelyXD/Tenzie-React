import "./App.css";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Die from "./components/Die";
import RollBtn from "./ui/RollBtn";
import RollSound from "./assets/audio-files/rollsound.mp3";
import clickDie from "./assets/audio-files/click.mp3";
import HamBurger from "./components/HamBurger";
import { motion, AnimatePresence, transform, delay } from "framer-motion";

// set state as a function that generates objects reprsenting all dice values
//  create an array of 10 different numbers from 1-6
function App() {
  const [allDice, setAllDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [playControl, setPlayControll] = useState(false);

  useEffect(() => {
    const held = allDice.every((die) => die.isHeld);
    const firstValue = allDice[0].value;
    const equalValues = allDice.every((die) => die.value === firstValue);
    if (held && equalValues) {
      setTenzies(true);
    }
  }, [allDice]);
  function generateNewDie() {
    return { id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false };
  }

  function allNewDice() {
    const diceArray = [];
    for (let i = 1; i < 11; i++) {
      const diceObj = generateNewDie();
      diceArray.push(diceObj);
    }
    return diceArray;
  }
  // conditional statement added to enable resetting of game
  function rollAllDice() {
    if (!tenzies) {
      setAllDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setAllDice(allNewDice());
      setTenzies(false);
    }

    playControl && new Audio(RollSound).play();
  }

  function holdDice(id) {
    setAllDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
    playControl && new Audio(clickDie).play();
  }

  function playAudio() {
    setPlayControll((prevValue) => !prevValue);
  }

  function hardReset() {
    setAllDice(allNewDice());
    setTenzies(false);
  }

  return (
    <div className="App">
      {tenzies && <Confetti />}

      <motion.div
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        // transition={{ delay: 0.5, type: "spring" }}
        className="box-container"
      >
        <h2 className="header"> {tenzies ? "You Win!" : "Tenzies"}</h2>
        <p className="text">
          {tenzies
            ? "Hey Champ, toutes nos félicitations. Hit the 'New Game' button to reset the game have fun! "
            : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
        </p>

        <div className="dice-box">
          {allDice.map((obj) => (
            <motion.div
              initial={{ opacity: 0, transform: "translateY(50px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Die
                value={obj.value}
                isHeld={obj.isHeld}
                key={obj.id}
                handleClick={() => holdDice(obj.id)}
              />
            </motion.div>
          ))}
        </div>
        <div className="btn-cont">
          <HamBurger
            handleSoundClick={playAudio}
            soundValue={playControl}
            reset={hardReset}
          />
          <RollBtn handleClick={rollAllDice} text={tenzies} />
        </div>
      </motion.div>
    </div>
  );
}

export default App;

// write pseudo code to turn die fsces to real die faces

// if die.value === 4 render die1
