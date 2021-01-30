import React, { useCallback, useEffect, useState } from "react";
import Tile from "../../Tile.js";
import GameState from "./GameState.js";
import "./Game.css";
import { Link } from "react-router-dom";

const useGameState = () => {
  const gameState = GameState.getInstance();
  const [state, setState] = useState(gameState.getState());

  const undo = () => {
    gameState.undo();
    setState(gameState.getState());
  };

  const move = (index) => {
    return function () {
      gameState.moveTile(index);
      setState(gameState.getState());
    };
  };

  const handleListeners = useCallback((event) => {
    const { key, keyCode } = event;
    if (event.keyCode === 37) gameState.moveInDirection("left");
    else if (event.keyCode === 38) gameState.moveInDirection("up");
    else if (event.keyCode === 39) gameState.moveInDirection("right");
    else if (event.keyCode === 40) gameState.moveInDirection("down");
    setState(gameState.getState());
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleListeners);
    return () => window.removeEventListener("keyup", handleListeners);
  }, [gameState]);

  return [state.board, state.moves, state.solved, move];
};

const Game = ({ itemData, movescount, setmovescount }) => {
  const [board, moves, solved, move] = useGameState();
  const handlemovesToggle = () => setmovescount(moves);
  return (
    <div className="game-container">
      <div className="game-header">
        <div className="moves">{moves}</div>
      </div>
      <div className="board">
        {board.slice(0, -1).map((pos, index) => (
          <Tile
            index={index}
            pos={pos}
            onClick={move(index)}
            itemData={itemData}
          />
        ))}
        {solved && (
          <div className="overlay">
            <Link to="/summary">
              <div className="buttonLink">
                <button onClick={handlemovesToggle}>
                  <span>Continue!</span>
                </button>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
