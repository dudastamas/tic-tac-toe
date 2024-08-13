export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>{winner} It's Draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}

// <div className="game-over">
//   <h2>Game Over</h2>
//   <p>{winner ? `Winner: ${winner}` : 'Draw'}</p>
//   <button onClick={resetGame}>Play Again</button>
// </div>
