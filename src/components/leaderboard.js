import React from 'react';

function Leaderboard({ scores }) {
  return (
    <div className="leaderboard-box">
      <h3>🏆 Leaderboard</h3>
      <ol>
        {scores
          .sort((a, b) => a.score - b.score)
          .slice(0, 5)
          .map((entry, index) => (
            <li key={index}>{entry.name}: {entry.score} ms</li>
          ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
