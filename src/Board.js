import React, { useContext } from "react";
import { GameContext } from "./GameContext";

const Board = () => {
  const { board, currentPlayer, winner, makeMove, resetGame } =
    useContext(GameContext);

  const renderSquare = (index) => {
    return (
      <button
        className="square"
        onClick={() => makeMove(index)}
        disabled={board[index] || winner}>
        {board[index]}
      </button>
    );
  };
  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square)) {
      return "It's a draw!";
    } else {
      return `Next player: ${currentPlayer}`;
    }
  };

  return (
    <div>
      <div className="status">{getStatus()}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Board;
