import Header from "./Components/Header";
import Image from "../public/game-logo.png";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
import { useState } from "react";
import Log from "./Components/Log";

function App() {
  const [gameTurns, setGameTurns]=useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {

      let currentPlayer = "X";

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updateTurns = [
        {square: { row: rowIndex, col: colIndex},
         player: currentPlayer
        }, ...prevTurns,
      ];

      return updateTurns;
    });
  }

  return (
    <main>
      <Header image={Image} title="Tic-Tac-Toe" />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initalPlayer="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initalPlayer="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <Gameboard
          onSelectSquare={handleActivePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
