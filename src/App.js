import React from "react";
import "./App.css";
import Board from "./Board";
import { GameProvider } from "./GameContext";

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <GameProvider>
        <Board />
      </GameProvider>
    </div>
  );
}

export default App;
