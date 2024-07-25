

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {


  let gameBoard = initialGameBoard;

  for( const turn of turns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }


/*  const [gameBoard, setGameBoard] = useState(initialGameBoard);

   function handleGameBoard(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateGameboard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateGameboard[rowIndex][colIndex] = activePlayerSymbol;
      return updateGameboard;
    });
    onSelectSquare();
  } */

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
