import { useState } from "react";
import styles from "../styles/Game.module.css";

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

// style objects
const choiceStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "40px",
};

const emojiStyles = {
  fontSize: 54,
  marginRight: 20,
};

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: "white",
};

const resultStyles = {
  marginTop: 40,
  fontSize: 48,
  color: "white",
};

// game function
function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [results, setResults] = useState(null);

  //   handlers function logic
  function handlePlayerChoice(choice) {
    const randomComputerChoice =
      CHOICES[Math.floor(Math.random() * CHOICES.length)];
    console.log(randomComputerChoice);
    setPlayerChoice(choice); //set player choice
    setComputerChoice(randomComputerChoice); // set computer choice

    // check who wins
    if (choice.name === randomComputerChoice.name) {
      setResults("Tie Game!");
    } else if (
      (choice.name === "rock" && randomComputerChoice.name === "scissors") ||
      (choice.name === "paper" && randomComputerChoice.name === "rock") ||
      (choice.name === "scissors" && randomComputerChoice.name === "paper")
    ) {
      setResults("You Win the Game!");
    } else {
      setResults("Sorry you lose! The computer wins!");
    }
  }

  // reset the game
  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResults(null);
  }

  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors Game</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You choose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{computerChoice.emoji}</span>
            <p style={nameStyles}>The computer choose {computerChoice.name}</p>
          </div>
          <h2 style={resultStyles}>{results}</h2>
          <button className={styles.button} onClick={resetGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
