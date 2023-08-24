import React from "react";
import { useGame } from "./GameContext";

const Status = () => {
  const { state } = useGame();

  let status;
  if (state.winner) {
    status = `Winner: ${state.winner}`;
  } else if (state.isGameOver) {
    status = "Draw! No winner.";
  } else {
    status = `Next player: ${state.currentPlayer}`;
  }

  return <div className="status">{status}</div>;
};

export default Status;
