import React, { useState } from 'react';

function Game({ onScoreSubmit }) {
  const [message, setMessage] = useState("Click to Start");
  const [waiting, setWaiting] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [score, setScore] = useState(null);

  const startGame = () => {
    setMessage("Wait for green...");
    setWaiting(true);
    const delay = Math.random() * 3000 + 2000;

    setTimeout(() => {
      setMessage("Click now!");
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (!waiting) return startGame();

    if (!startTime) {
      setMessage("Too soon! Wait for green.");
      setWaiting(false);
      return;
    }

    const reactionTime = Date.now() - startTime;
    setScore(reactionTime);
    setWaiting(false);
    setStartTime(null);

    const name = prompt("Your name:");
    if (name) {
      onScoreSubmit({ name, score: reactionTime });
    }

    setMessage(`Your time: ${reactionTime} ms`);
  };

  return (
    <div onClick={handleClick} className="game-box">
      <h2>{message}</h2>
      {score && <p>Click to try again.</p>}
    </div>
  );
}

export default Game;
