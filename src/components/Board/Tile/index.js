import React from 'react';
import './Tile.css';

const Tile = props => {
  // TODO 1) : Destructure Tile props
  const {letter, selected} = props
  
  return (
    <button
      className={selected ? 'tile-selected' : 'tile'}
      // TODO 4): Pass button onClick callback as props
    >
      {/* TODO 1: Render letter */}
      {letter}
    </button>
  );
};

export default Tile;
