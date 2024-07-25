import { useState } from "react";

export default function Player({ initalPlayer, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initalPlayer);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  function showInput() {
    setIsEditing((prevEdit) => !prevEdit);
  }

  function changeName(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={changeName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={showInput}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
