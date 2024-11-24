import { useState } from "react";



const CHOICES = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" },
  ];


// game function
function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [results, setResults] = useState(null);

  //   handlers function
  function handlePlayerChoice(choice) {
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setComputerChoice(choice);
    setComputerChoice(computerChoice);

    // check who wins
    if (choice.name === computerChoice.name) {
      setResults("Tie Game!");
    } else if (
      (choice.name === "rock" && computerChoice.name === "scissors") ||
      (choice.name === "paper" && computerChoice === "rock") ||
      (choice.name === "scissors" && computerChoice.name === "paper")
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
    <div>
      <h1>Rock Paper Scissors Game</h1>
      <div>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <div>
            <span>{playerChoice.emoji}</span>
            <p>You choose {playerChoice.name}</p>
          </div>
          <div>
            <span>{computerChoice.emoji}</span>
            <p>The computer choose {playerChoice.name}</p>
          </div>
          <h2>{results}</h2>
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
