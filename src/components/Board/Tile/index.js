import React from 'react';
import './Tile.css';

const Tile = props => {
  // TODO 1) : Destructure Tile props
  const {letter, selected, handleClick} = props
  
  return (
    <button
      className={selected ? 'tile-selected' : 'tile'}
      // TODO 4): Pass button onClick callback as props
      onClick={()=>handleClick()}
    >
      {/* TODO 1: Render letter */}
      {letter}
    </button>
  );
};

export default Tile;
