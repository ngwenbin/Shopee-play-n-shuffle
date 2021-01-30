import React from "react";
import "./pages/GamePage/Game.css";

const Tile = ({ index, pos, onClick }) => {
  const top = pos[0] * 65 + 5;
  const left = pos[1] * 65 + 5;
  const bgLeft = (index % 4) * 65 + 5;
  const bgTop = Math.floor(index / 4) * 65 + 5;

  return (
    <div
      className="tile"
      onClick={onClick}
      style={{ top, left, backgroundPosition: `-${bgLeft}px -${bgTop}px` }}
    />
  );
};

export default Tile;
